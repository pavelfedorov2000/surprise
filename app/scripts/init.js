$(function () {
    app.menu.init();
    app.tabs.init();
    app.select.init();
    app.accordion.init();
    app.catalogFilters.init();
    app.asideChoose.init();
    app.starRating.init();
    app.cart.init();
    app.popup.init();
    app.validation.init();
    app.progressbar.init();
    app.compareSection.init();

    new AirDatepicker('#calendar', {
        selectedDates: [new Date()]
    });

    new AirDatepicker('.profile-block__date', {
        selectedDates: [new Date()],
        position: $(window).width() < 768 ? 'bottom right' : 'bottom left',
    });

    new AirDatepicker('#add-event .input[data-date]', {
        position: 'top center'
    });

    new AirDatepicker('.order-ready__form .input[data-date]', {
        position: 'top center'
    });

    new AirDatepicker('#edit-event .input[data-date]', {
        selectedDates: [new Date($('#edit-event .input[data-date]').val())],
        position: 'top center'
    });
    
    $(document).on('click', '.js-add-field', function () {
        $(this).replaceWith(`
            <label class="form-item">
                <input class="input">
            </label>
        `);
    });

    const moreButtonTextArray = ['Подробнее', 'Скрыть'];
    const moreButtonTextMap = new Map();

    moreButtonTextArray.forEach((item, index) => {
        moreButtonTextMap.set(Boolean(index), item);
    });

    $(document).on('click', '.more-text-btn', function () {
        const $moreTextBtn = $(this);
        const $moreTextBtnText = $moreTextBtn.find('.btn__text');
        const $text = $moreTextBtn.prev();

        if ($moreTextBtn.attr('aria-expanded') === 'false') {
            $moreTextBtnText.text(moreButtonTextMap.get(true));
            $moreTextBtn.attr('aria-expanded', true);
            $text.addClass('no-overflow');
        } else {
            $moreTextBtnText.text(moreButtonTextMap.get(false));
            $moreTextBtn.attr('aria-expanded', false);
            $text.removeClass('no-overflow');
        }
    });

    $(document).on('click', '.js-view-review-answers', function () {
        const $btn = $(this);
        const $reviewAnswers = $btn.closest('.review').find('.review__answers');

        if ($btn.attr('aria-expanded') === 'false') {
            $btn.attr('aria-expanded', true);
            $reviewAnswers.slideDown();
        } else {
            $btn.attr('aria-expanded', false);
            $reviewAnswers.slideUp();
        }
    });

    $(document).on('click', '.js-notifications', function () {
        const $notificationsBtn = $(this);
        const $notificationsDropdown = $('.notifications-dropdown');

        if ($notificationsBtn.attr('aria-expanded') === 'false') {
            $notificationsBtn.attr('aria-expanded', true);
            $notificationsBtn.attr('aria-label', 'Закрыть уведомления');
            $notificationsDropdown.addClass('active');
        } else {
            $notificationsBtn.attr('aria-expanded', false);
            $notificationsBtn.attr('aria-label', 'Открыть уведомления');
            $notificationsDropdown.removeClass('active');
        }
    });

    $(document).on('click', '.js-calendar', function () {
        const $calendarBtn = $(this);
        const $calendarDropdown = $('.calendar-dropdown');

        if ($calendarBtn.attr('aria-expanded') === 'false') {
            $calendarBtn.attr('aria-expanded', true);
            $calendarBtn.attr('aria-label', 'Закрыть календарь событий');
            $calendarDropdown.addClass('active');

            if ($(window).width() <= 767) {
                $('body').addClass('_lock');
            }
        } else {
            $calendarBtn.attr('aria-expanded', false);
            $calendarBtn.attr('aria-label', 'Открыть календарь событий');
            $calendarDropdown.removeClass('active');

            if ($(window).width() <= 767) {
                $('body').removeClass('_lock');
            }
        }
    });

    $('#remove-event .popup__btn:last-child').on('click', function() {
        $(this).closest('.popup').fadeOut();
        $('.overlay').fadeOut();
        $('body').removeClass('_lock');
    });

    $(document).on('mousedown', function (e) {
        const $calendarDropdown = $('.calendar-dropdown');
        const $calendarBtn = $('.js-calendar');

        if (!$calendarBtn.is(e.target) && !$calendarBtn.find('svg').is(e.target) && !$calendarDropdown.is(e.target) && $calendarDropdown.has(e.target).length === 0) {
            $calendarBtn.attr('aria-expanded', false);
            $calendarBtn.attr('aria-label', 'Открыть календарь событий');
            $calendarDropdown.removeClass('active');
        }
    });

    $(document).on('mousedown', function (e) {
        const $notificationsDropdown = $('.notifications-dropdown');
        const $notificationsBtn = $('.js-notifications');

        if (!$notificationsBtn.is(e.target) && !$notificationsBtn.find('svg').is(e.target) && !$notificationsDropdown.is(e.target) && $notificationsDropdown.has(e.target).length === 0) {
            $notificationsBtn.attr('aria-expanded', false);
            $notificationsBtn.attr('aria-label', 'Открыть календарь событий');
            $notificationsDropdown.removeClass('active');
        }
    });

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

    if (document.querySelectorAll('[data-da').length) {
        da.init();
    }

    const table = document.querySelector('.table-wrap');
    if (!table) {
        return;
    }
    const tableVisibleWidth = table.getBoundingClientRect().width;
    const tableWidth = table.scrollWidth;
    const ths = table.querySelectorAll('th');
    const compareProductItems = document.querySelectorAll('.compare-product');
    const compareProducts = [...ths].slice(1);
    const thWidth = compareProducts[0].getBoundingClientRect().width;
    const compareProductsWidth = thWidth * compareProducts.length;
    const compareProductsOffsets = compareProducts.map((item) => item.offsetLeft);
    const firstThWidth = tableWidth - compareProductsWidth;
    const visibleProductsWidth = tableVisibleWidth - firstThWidth;
    const deltaVisible = visibleProductsWidth - thWidth;

    table.onscroll = function () {
        const scrollX = table.scrollLeft;
        const delta = deltaVisible + scrollX;

        compareProductsOffsets.forEach((_, index) => {
            if (index > 0) {
                if (delta >= compareProductsOffsets[index - 1]) {
                    compareProductItems[index].classList.add('in-view');
                } else {
                    compareProductItems[index].classList.remove('in-view');
                }
            }
        });
    };
});