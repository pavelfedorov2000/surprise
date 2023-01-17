app.select = {
    name: 'select',
    description: 'Custom jquery select',
    init() {
        $('.select:not(.select--with_input) .select__title').on('click', function () {
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

        $('.select__arrow').on('click', function () {
            const $selectArrow = $(this);
            const $select = $selectArrow.closest('.select');
            const $selectContent = $select.find('.select__content');
            const $selectNotActive = $select.siblings();
            const $selectArrowNotActive = $selectNotActive.find('.select__arrow');
            const $selectContentNotActive = $selectNotActive.find('.select__content');
            const $catalogFilters = $select.siblings();
            const $catalogFiltersBtns = $catalogFilters.find('.catalog-filter__btn');
            const $dropFilters = $catalogFilters.find('.dropdown-filter');

            $selectArrowNotActive.attr('aria-expanded', false);
            $selectContentNotActive.slideUp();

            $catalogFiltersBtns.attr('aria-expanded', false);
            $dropFilters.slideUp();

            if (!$select.hasClass('select--type_price') && $selectArrow.attr('aria-expanded') === 'false') {
                $selectArrow.attr('aria-expanded', true);
                $selectContent.slideDown();
            } else {
                $selectArrow.attr('aria-expanded', false);
                $selectContent.slideUp();
            }
        });

        $('.select__title-input').on('focus', function () {
            $(this).closest('.select').find('.select__content').slideUp();
        });

        $('.select__title-input').on('keyup', function () {
            const $selectTitleInput = $(this);
            const $catalogFilterBtnItem = $(`#${$selectTitleInput.attr('data-select-input')}`);

            $catalogFilterBtnItem.text($selectTitleInput.val());
        });

        $('.select__label').on('click', function () {
            const $selectOption = $(this);
            const $select = $selectOption.closest('.select');
            const $selectTitle = $select.find('.select__title');
            const $selectTitleInput = $selectTitle.find('.select__title-input');
            const $selectArrow = $selectTitle.find('.select__arrow');
            const $selectTitleKey = $selectTitle.find('.select__key');
            const $selectTitleKeyDescr = $selectTitle.find('.select__key-descr');
            const $selectTitleValue = $selectTitle.find('.select__value');
            const $selectContent = $select.find('.select__content');

            $selectContent.slideUp();

            if ($select.hasClass('select--with_input')) {
                $selectArrow.attr('aria-expanded', false);
            } else {
                $selectTitle.attr('aria-expanded', false);
            }

            if ($select.hasClass('select--type_price')) {
                $selectTitleKey.text($selectOption.find('.select__key').attr('data-value'));
                $selectTitleKeyDescr.text($selectOption.find('.select__key-descr').attr('data-value'));
                $selectTitleValue.text($selectOption.find('.select__value').attr('data-value'));
            } else if ($select.hasClass('select--with_input')) {
                $selectTitleInput.val($selectOption.attr('data-value'));
            } else if ($select.hasClass('select--type_sort')) {
                $selectTitle.find('span').text($selectOption.attr('data-value'));
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
