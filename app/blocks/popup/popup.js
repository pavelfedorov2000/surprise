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

            if ($btn.hasClass('action-btn')) {
                $btn.attr('aria-expanded', true);
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
            const $popup = $(this).closest('.popup');
            $popup.fadeOut();

            const $btn = $(`[data-popup="${$popup.attr('id')}"]`);

            if ($btn.hasClass('action-btn')) {
                $btn.attr('aria-expanded', false);
            }

            $('.overlay').fadeOut();
            $('body').removeClass('_lock');
            $('html').removeClass('disable-fix');
        });

        Fancybox.bind('[data-fancybox]', {
            autoFocus: false,
            //dragToClose: false,
            closeButton: false,
            showClass: 'fancybox-fadeIn',
            Toolbar: {
                display: {
                    left: [],
                    middle: [],
                    right: [
                        'iterateZoom',
                        'close',
                    ],
                },
            },
            Thumbs: {
                showOnStart: false,
            },
        });
    },
};

