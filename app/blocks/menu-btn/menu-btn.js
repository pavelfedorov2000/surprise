app.menu = {
    name: 'menu',
    description: 'menu logic',
    init() {
        $('.menu-btn').on('click', function () {
            const $menuBtn = $(this);

            if ($menuBtn.attr('aria-expanded') === 'false') {
                $('html').addClass('disable-fix');
                $('body').addClass('_lock');
                $('.overlay--menu').fadeIn();
                $('.menu').addClass('active');
                $menuBtn.attr('aria-expanded', true);
                $menuBtn.attr('aria-label', 'Закрыть меню');
            } else {
                $menuBtn.attr('aria-label', 'Открыть меню');
                $menuBtn.attr('aria-expanded', false);
                $('.menu').removeClass('active');
                $('.overlay--menu').fadeOut();
                $('body').removeClass('_lock');
                $('html').removeClass('disable-fix');
            }
        });

        $('.menu__close').on('click', function () {
            $('.menu-btn').attr('aria-expanded', false);
            $(this).closest('.menu').removeClass('active');
            $('.overlay--menu').fadeOut();
            $('body').removeClass('_lock');
            $('html').removeClass('disable-fix');
        });

        $(document).on('mouseup', function (e) {
            const $menu = $('.menu');
            const $popup = $('.popup');
            const $menuBtn = $('.menu-btn');

            if (!$menu.is(e.target) && $menu.has(e.target).length === 0 && !$menuBtn.is(e.target) && $menuBtn.has(e.target).length === 0 && !$popup.is(e.target) && $popup.has(e.target).length === 0) {
                $menuBtn.attr('aria-expanded', false);
                $menu.removeClass('active');
                $popup.fadeOut();
                $('.overlay--menu').fadeOut();
                $('body').removeClass('_lock');
                $('html').removeClass('disable-fix');
            }
        });
    },
};
