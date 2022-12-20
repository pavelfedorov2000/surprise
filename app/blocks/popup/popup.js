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
            $('body').addClass('_lock');
            $('html').addClass('disable-fix');
            $('.overlay').fadeIn();
            $(`#${$(this).attr('data-popup')}`).fadeIn();
        });

        $(document).on('click', '.popup__close', function () {
            $(this).closest('.popup').fadeOut();
            $('.overlay').fadeOut();
            $('body').removeClass('_lock');
            $('html').removeClass('disable-fix');
        });
    },
};

