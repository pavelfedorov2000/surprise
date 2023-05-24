app.catalogFilters = {
    name: 'catalogFilters',
    description: 'your script description',
    init() {
        $(document).on('mouseup', function (e) {
            const $catalogFilter = $('.catalog-filter');
            const $catalogFilterBtn = $catalogFilter.find('.catalog-filter__btn');
            const $dropdownFilter = $catalogFilter.find('.dropdown-filter');

            if (!$catalogFilter.is(e.target) && $catalogFilter.has(e.target).length === 0) {
                $catalogFilterBtn.attr('aria-expanded', false);
                $dropdownFilter.slideUp();
            }
        });

        $(document).on('click', '.filter-btn', function () {
            $('body').addClass('_lock');
            $('.catalog-filters.fixed').addClass('active');
        });

        $(document).on('click', '.catalog-filters__back-btn', function () {
            $('body').removeClass('_lock');
            $('.catalog-filters.fixed').removeClass('active');
        });

        if ($(window).width() < 1200 && !$('.catalog-filters').closest('.promo-banner').length) {
            $('.catalog-filters').addClass('fixed');
        } else {
            $('.catalog-filters').removeClass('fixed');
        }

        $(window).on('resize', function () {
            if ($(window).width() < 1200 && !$('.catalog-filters').closest('.promo-banner').length) {
                $('.catalog-filters').addClass('fixed');
            } else {
                $('.catalog-filters').removeClass('fixed');
            }
        });

        const catalogFiltersCondition = $(window).width() < 1200 && $('.catalog-filters').closest('.promo-banner').length;

        $(window).on('scroll', function () {
            const $catalogFilters = $('.promo-banner .catalog-filters');

            if ($catalogFilters.length) {
                const scrollY = $catalogFilters.offset().top + $catalogFilters.height();
                const scrollTop = $(window).scrollTop();

                if (catalogFiltersCondition && scrollTop < scrollY) {
                    $catalogFilters.removeClass('fixed');
                    $('.filter-btn').addClass('hidden');
                }
            }
        });

        $(window).on('scroll', function () {
            const $catalogFilters = $('.promo-banner .catalog-filters');

            if ($catalogFilters.length) {
                const scrollY = $catalogFilters.offset().top + $catalogFilters.height();
                const scrollTop = $(window).scrollTop();

                if (catalogFiltersCondition && scrollTop > scrollY) {
                    $catalogFilters.addClass('fixed');
                    $('.filter-btn').removeClass('hidden');
                }
            }
        });
    },
};
