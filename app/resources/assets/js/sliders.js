$(function () {
    new Swiper('.catalog-card__slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.slider-btn--next',
            prevEl: '.slider-btn--prev',
        },
    });

    if ($(window).width() <= 1024) {
        new Swiper('.ordered-tape-section__slider', {
            slidesPerView: 'auto',
            spaceBetween: 32,
            speed: 1000,
        });
    }

    new Swiper('.partners-slider', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 12.5,
        speed: 1000,
        navigation: {
            nextEl: '.slider-btn--next',
            prevEl: '.slider-btn--prev',
        },
        breakpoints: {
            768: {
                spaceBetween: 32,
            },
            1025: {
                centeredSlides: false,
                spaceBetween: 92,
            }
        },
    });

    const establishmentGalleryThumbs = new Swiper(".establishment-gallery-thumbs", {
        loop: true,
        spaceBetween: 14,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
    });

    new Swiper(".establishment-gallery", {
        loop: true,
        spaceBetween: 14,
        navigation: {
            nextEl: ".slider-btn--next",
            prevEl: ".slider-btn--prev",
        },
        pagination: {
            type: 'fraction',
            el: '.swiper-pagination',
            clickable: true,
        },
        thumbs: {
            swiper: establishmentGalleryThumbs,
        },
    });

    let photogallerySlider;
    function initPhotogallerySlider(windowWidth) {
        if ($(window).width() <= windowWidth) {
            photogallerySlider = new Swiper('.photogallery', {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 32,
                speed: 1000,
                pagination: {
                    type: 'fraction',
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        } else if ($('.photogallery').hasClass('swiper-initialized')) {
            photogallerySlider.destroy(true, true);
        }
    }

    initPhotogallerySlider(1200);

    $(window).on('resize', function () {
        initPhotogallerySlider(1200);
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

    const postGalleryThumbs = new Swiper(".post-gallery-thumbs", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    new Swiper(".post-gallery", {
        loop: true,
        spaceBetween: 14,
        navigation: {
            nextEl: ".slider-btn--next",
            prevEl: ".slider-btn--prev",
        },
        pagination: {
            type: 'fraction',
            el: '.swiper-pagination',
            clickable: true,
        },
        thumbs: {
            swiper: postGalleryThumbs,
        },
    });
});