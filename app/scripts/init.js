$(document).ready(function () {
    app.menu.init();
    app.select.init();
    app.accordion.init();
    app.catalogFilters.init();
    //new WOW().init();
    //app.burger.init();
    //app.slider.init();
    //app.popup.init();
    //app.validation.init();

    $(document).on('click', '.more-text-btn', function () {
        const $moreTextBtn = $(this);
        const $text = $moreTextBtn.prev();

        if ($moreTextBtn.attr('aria-expanded') === 'false') {
            $moreTextBtn.text('Скрыть');
            $moreTextBtn.attr('aria-expanded', true);
            $text.addClass('no-overflow');
        } else {
            $moreTextBtn.text('Подробнее');
            $moreTextBtn.attr('aria-expanded', false);
            $text.removeClass('no-overflow');
        }
    });

    new Swiper('.catalog-card__slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        /* autoplay: {
        delay: 3000,
        }, */
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.slider-btn--next',
            prevEl: '.slider-btn--prev',
        },
    });

    const $blogSlider = $('.blog-slider');

    if ($blogSlider.length) {
        const $blogSliderClass = $blogSlider.attr('class').split(' ').filter(el => el !== 'swiper')[0];
        const $blogSliderWrap = $(`.${$blogSliderClass}`).closest('section').attr('id');
        new Swiper(`.${$blogSliderClass}`, {
            loop: true,
            slidesPerView: 1.16875,
            spaceBetween: 24,
            speed: 1000,
            navigation: {
                nextEl: `#${$blogSliderWrap} .slider-wrap .slider-btn--next`,
                prevEl: `#${$blogSliderWrap} .slider-wrap .slider-btn--prev`,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2.2,
                },
                768: {
                    slidesPerView: 2.2,
                    spaceBetween: 32,
                },
                1025: {
                    slidesPerView: 3,
                    spaceBetween: 64,
                }
            },
        });
    }

    const $reviewsSlider = $('.reviews-slider');

    if ($reviewsSlider.length) {
        const $reviewsSliderClass = $reviewsSlider.attr('class').split(' ').filter(el => el !== 'swiper')[0];
        const $reviewsSliderWrap = $(`.${$reviewsSliderClass}`).closest('section').attr('id');
        new Swiper(`.${$reviewsSliderClass}`, {
            loop: true,
            slidesPerView: 1.16875,
            spaceBetween: 24,
            speed: 1000,
            navigation: {
                nextEl: `#${$reviewsSliderWrap} .slider-wrap .slider-btn--next`,
                prevEl: `#${$reviewsSliderWrap} .slider-wrap .slider-btn--prev`,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2.2,
                },
                768: {
                    slidesPerView: 2.2,
                    spaceBetween: 32,
                },
                1025: {
                    slidesPerView: 3,
                    spaceBetween: 60,
                }
            },
        });
    }

    // Скрипт динамического адаптива (для перемещения ДОМ-элементов в другое место если нужно без дублирования кода)
    function DynamicAdapt(type) {
        this.type = type
    }

    DynamicAdapt.prototype.init = function () {
        const _this = this
        // массив объектов
        this.оbjects = []
        this.daClassname = '_dynamic_adapt_'
        // массив DOM-элементов
        this.nodes = document.querySelectorAll('[data-da]')

        // наполнение оbjects объктами
        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i]
            const data = node.dataset.da.trim()
            const dataArray = data.split(',')
            const оbject = {}
            оbject.element = node
            оbject.parent = node.parentNode
            оbject.destination = document.querySelector(dataArray[0].trim())
            оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767'
            оbject.place = dataArray[2] ? dataArray[2].trim() : 'last'
            оbject.index = this.indexInParent(оbject.parent, оbject.element)
            this.оbjects.push(оbject)
        }

        this.arraySort(this.оbjects)

        // массив уникальных медиа-запросов
        this.mediaQueries = Array.prototype.map.call(
            this.оbjects,
            function (item) {
                return (
                    '(' +
                    this.type +
                    '-width: ' +
                    item.breakpoint +
                    'px),' +
                    item.breakpoint
                )
            },
            this,
        )
        this.mediaQueries = Array.prototype.filter.call(
            this.mediaQueries,
            function (item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index
            },
        )

        // навешивание слушателя на медиа-запрос
        // и вызов обработчика при первом запуске
        for (let i = 0; i < this.mediaQueries.length; i++) {
            const media = this.mediaQueries[i]
            const mediaSplit = String.prototype.split.call(media, ',')
            const matchMedia = window.matchMedia(mediaSplit[0])
            const mediaBreakpoint = mediaSplit[1]

            // массив объектов с подходящим брейкпоинтом
            const оbjectsFilter = Array.prototype.filter.call(
                this.оbjects,
                function (item) {
                    return item.breakpoint === mediaBreakpoint
                },
            )
            matchMedia.addListener(function () {
                _this.mediaHandler(matchMedia, оbjectsFilter)
            })
            this.mediaHandler(matchMedia, оbjectsFilter)
        }
    }

    DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
        if (matchMedia.matches) {
            for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i]
                оbject.index = this.indexInParent(оbject.parent, оbject.element)
                this.moveTo(оbject.place, оbject.element, оbject.destination)
            }
        } else {
            for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i]
                if (оbject.element.classList.contains(this.daClassname)) {
                    this.moveBack(оbject.parent, оbject.element, оbject.index)
                }
            }
        }
    }

    // Функция перемещения
    DynamicAdapt.prototype.moveTo = function (place, element, destination) {
        element.classList.add(this.daClassname)
        if (place === 'last' || place >= destination.children.length) {
            destination.insertAdjacentElement('beforeend', element)
            return
        }
        if (place === 'first') {
            destination.insertAdjacentElement('afterbegin', element)
            return
        }
        destination.children[place].insertAdjacentElement('beforebegin', element)
    }

    // Функция возврата
    DynamicAdapt.prototype.moveBack = function (parent, element, index) {
        element.classList.remove(this.daClassname)
        if (parent.children[index] !== undefined) {
            parent.children[index].insertAdjacentElement('beforebegin', element)
        } else {
            parent.insertAdjacentElement('beforeend', element)
        }
    }

    // Функция получения индекса внутри родителя
    DynamicAdapt.prototype.indexInParent = function (parent, element) {
        const array = Array.prototype.slice.call(parent.children)
        return Array.prototype.indexOf.call(array, element)
    }

    // Функция сортировки массива по breakpoint и place
    // по возрастанию для this.type = min
    // по убыванию для this.type = max
    DynamicAdapt.prototype.arraySort = function (arr) {
        if (this.type === 'min') {
            Array.prototype.sort.call(arr, function (a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) {
                        return 0
                    }

                    if (a.place === 'first' || b.place === 'last') {
                        return -1
                    }

                    if (a.place === 'last' || b.place === 'first') {
                        return 1
                    }

                    return a.place - b.place
                }

                return a.breakpoint - b.breakpoint
            })
        } else {
            Array.prototype.sort.call(arr, function (a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) {
                        return 0
                    }

                    if (a.place === 'first' || b.place === 'last') {
                        return 1
                    }

                    if (a.place === 'last' || b.place === 'first') {
                        return -1
                    }

                    return b.place - a.place
                }

                return b.breakpoint - a.breakpoint
            })
            return
        }
    }

    const da = new DynamicAdapt('max')
    da.init();


    //smoooth scroll to section
    /* document.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: document.getElementById(link.getAttribute('data-section')).offsetTop,
                behavior: "smooth"
            });
            body.classList.remove('_lock');
            burgerBtn.classList.remove('.is-active');
            burgerMenu.classList.remove('.is-active');
        });
    }); */

    // popups
    //jquery
    /* $('.open-popup').on('click', function () {
        $('body').addClass('_lock');
        $('.overlay').fadeIn('slow');
        $(`#${$(this).data('popup')}-popup`).fadeIn('slow');
    });
    $('.popup__close').on('click', function () {
        $('body').removeClass('_lock');
        $('.overlay').fadeOut('slow');
        $(this).parent().fadeIn('slow');
    }); */


    // magnific
    /* $('.open-video').magnificPopup({
        type: 'iframe',
        preloader: false,
    });
    
    
    $('.popup-link').magnificPopup({
        type: 'inline' // к попапу добавить класс mfp-hide // Через кнопку data-mfp-src="#call_me" добавить кнопке
    });
    
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded',
        }
    }); */
});