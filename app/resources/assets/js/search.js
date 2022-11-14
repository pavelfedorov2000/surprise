$(document).ready(function () {
    $('.search-block__input').on('focus', function () {
        const $searchBlockInput = $(this);
        const $searchBlock = $searchBlockInput.closest('form');
        const $searchBlockPlaceholder = $searchBlock.find('.search-block__placeholder');

        $searchBlock.addClass('active');
        $searchBlockPlaceholder.addClass('active');
        $('.search-block__form-btn').attr('type', 'submit');

        if ($(window).width() > 1024) {
            $('.header__menu').fadeOut('300');
        }
    });

    $('.search-block__input').on('focusout', function () {
        const $searchBlockInput = $(this);
        const $searchBlock = $searchBlockInput.closest('form');
        const $searchBlockPlaceholder = $searchBlock.find('.search-block__placeholder');

        $searchBlockInput.val('');
        $searchBlockPlaceholder.removeClass('active');
        $searchBlock.removeClass('active');

        if ($(window).width() > 767) {
            $('.search-block__form-btn').attr('type', 'button');
        }

        $('.drop-search').hide();

        if ($(window).width() > 1024) {
            $('.header__menu').fadeIn('300');
        }
    });

    if ($(window).width() < 768) {
        $('.search-block__form-btn').attr('type', 'submit');
    }

    $(window).on('resize', function () {
        if ($(window).width() < 768) {
            $('.search-block__form-btn').attr('type', 'submit');
        } else {
            $('.search-block__form-btn').attr('type', 'button');
        }
    });

    $('.search-block__input').on('keyup', function () {
        const $searchBlockInput = $(this);
        const inputVal = $searchBlockInput.val();
        const $searchBlock = $searchBlockInput.closest('form');
        const $searchBlockPlaceholder = $searchBlock.find('.search-block__placeholder');

        if (inputVal !== '') {
            $('.drop-search').fadeIn('slow');
            $searchBlockPlaceholder.removeClass('active');
        } else {
            $('.drop-search').fadeOut('slow');
            $searchBlockPlaceholder.addClass('active');
        }
    });

    $('.mob-search-btn').on('click', function () {
        $('.search-block').slideDown('300');
    });

    $(document).on('mouseup', function (e) {
        const $searchBlock = $('.search-block');
        const $searchBlockPlaceholder = $searchBlock.find('.search-block__placeholder');

        if ($(window).width() < 768 && !$searchBlock.is(e.target) && $searchBlock.has(e.target).length === 0) {
            $searchBlock.slideUp();
            $searchBlockPlaceholder.removeClass('active');
        }
    });
});