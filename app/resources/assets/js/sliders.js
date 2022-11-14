$(document).ready(function () {
    new Swiper('.sale-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 1000,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 4,
            },
        },
    });
});