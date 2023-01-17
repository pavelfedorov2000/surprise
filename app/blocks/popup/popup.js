app.popup = {
    name: 'popup',
    description: 'popup logic',
    init() {
        $('.js-toggle-password').on('click', function () {
            const $btn = $(this);
            const $input = $btn.closest('.input-wrap').find('input');

            if ($btn.hasClass('active')) {
                $btn.attr('aria-label', 'Скрыть пароль');
                $btn.removeClass('active');
                $input.attr('type', 'password');
            } else {
                $btn.attr('aria-label', 'Скрыть пароль');
                $btn.addClass('active');
                $input.attr('type', 'text');
            }
        });

        $('[data-popup]').on('click', function () {
            const $btn = $(this);
            const attr = $btn.attr('data-popup');
            const $parent = $btn.closest('.dropdown-certificate-field__item');

            const $popup = $(`#${attr}`);
            $popup.fadeIn();

            if (attr === 'congratulations-popup') {
                $('body').removeClass('_lock');
                $('html').removeClass('disable-fix');
                $('.overlay').hide();

                if ($(window).width() > 767) {
                    $parent.append($popup);
                }
            } else {
                $('body').addClass('_lock');
                $('html').addClass('disable-fix');
                $('.overlay').fadeIn();
            }


        });

        /* $('[data-popup="congratulations-popup"]').on('click', function () {
            const $btn = $(this);
            const $popup = $(`#${$btn.attr('data-popup')}`);
            const $parent = $btn.closest('.dropdown-certificate-field__item');

            $parent.append($popup);
            $popup.fadeIn();
        }); */

        $(document).on('click', '.congratulation-item', function () {
            const $item = $(this);
            const $siblings = $item.siblings();

            $siblings.removeClass('active');
            $item.parent().siblings().find('.congratulation-item.active').removeClass('active');
            $item.addClass('active');
        });

        $(document).on('click', '.popup__close', function () {
            $(this).closest('.popup').fadeOut();
            $('.overlay').fadeOut();
            $('body').removeClass('_lock');
            $('html').removeClass('disable-fix');
        });
    },
};

