app.select = {
    name: 'select',
    description: 'Custom jquery select',
    init() {
        $('.select__title').on('click', function () {
            const $selectTitle = $(this);
            const $select = $selectTitle.closest('.select');
            const $selectContent = $select.find('.select__content');
            const $selectNotActive = $select.siblings();
            const $selectTitleNotActive = $selectNotActive.find('.select__title');
            const $selectContentNotActive = $selectNotActive.find('.select__content');
            const $catalogFilters = $select.siblings();
            const $catalogFiltersBtns = $catalogFilters.find('.catalog-filter__btn');
            const $dropFilters = $catalogFilters.find('.dropdown-filter');

            $selectTitleNotActive.attr('aria-expanded', false);
            $selectContentNotActive.slideUp();

            $catalogFiltersBtns.attr('aria-expanded', false);
            $dropFilters.slideUp();

            if ($selectTitle.attr('aria-expanded') === 'false') {
                $selectTitle.attr('aria-expanded', true);
                $selectContent.slideDown();
            } else {
                $selectTitle.attr('aria-expanded', false);
                $selectContent.slideUp();
            }
        });

        $('.select__label').on('click', function () {
            const $selectOption = $(this);
            const $select = $selectOption.closest('.select');
            const $selectTitle = $select.find('.select__title');
            const $selectTitleKey = $selectTitle.find('.select__key');
            const $selectTitleKeyDescr = $selectTitle.find('.select__key-descr');
            const $selectTitleValue = $selectTitle.find('.select__value');
            const $selectContent = $select.find('.select__content');

            $selectContent.slideUp();
            $selectTitle.attr('aria-expanded', false);

            if ($select.hasClass('select--type_price')) {
                $selectTitleKey.text($selectOption.find('.select__key').attr('data-value'));
                $selectTitleKeyDescr.text($selectOption.find('.select__key-descr').attr('data-value'));
                $selectTitleValue.text($selectOption.find('.select__value').attr('data-value'));
            } else {
                $selectTitle.text($selectOption.attr('data-value'));
            }
        });

        $(document).on('mouseup', function (e) {
            const $select = $('.select');
            const $selectTitle = $select.find('.select__title');
            const $selectContent = $select.find('.select__content');

            if (!$select.is(e.target) && $select.has(e.target).length === 0) {
                $selectTitle.attr('aria-expanded', false);
                $selectContent.slideUp();
            }
        });
    },
};
