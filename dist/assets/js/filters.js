$(function () {
    $(document).on('click', '.catalog-filter__btn', function () {
        const $catalogFilterBtn = $(this);
        const $catalogFilter = $catalogFilterBtn.closest('.catalog-filter');
        const $dropdownFilter = $catalogFilter.find('.dropdown-filter');
        const $catalogFilterNotActive = $catalogFilter.siblings();
        const $dropdownFilterBtnNotActive = $catalogFilterNotActive.find('.catalog-filter__btn');
        const $dropdownFilterNotActive = $catalogFilterNotActive.find('.dropdown-filter');
        const $select = $catalogFilter.parent().find('.select');
        const $selectTitle = $select.find('.select__title');
        const $selectContent = $select.find('.select__content');

        $dropdownFilterBtnNotActive.attr('aria-expanded', false);
        $dropdownFilterNotActive.slideUp();

        $selectTitle.attr('aria-expanded', false);
        $selectContent.slideUp();

        if ($catalogFilterBtn.attr('aria-expanded') === 'false') {
            $catalogFilterBtn.attr('aria-expanded', true);
            $dropdownFilter.slideDown();
        } else {
            $catalogFilterBtn.attr('aria-expanded', false);
            $dropdownFilter.slideUp();
        }
    });

    $(document).on('click', '.reset-btn', function () {
        const $resetFilterBtn = $(this);
        const $catalogFilter = $resetFilterBtn.closest('.catalog-filter');
        const $catalogFilterBtn = $catalogFilter.find('.catalog-filter__btn');
        const $dropdownFilter = $catalogFilter.find('.dropdown-filter');
        const $priceFilterItem = $dropdownFilter.find('.price-filter__item');
        const $priceFrom = $priceFilterItem.first();
        const $priceTo = $priceFilterItem.last();
        const $priceFromInput = $priceFrom.find('.select__title-input');
        const $priceFromDefault = $priceFrom.find('.select__input').first();
        const $priceFromDefaultValue = $priceFromDefault.next().attr('data-value');
        const $priceToInput = $priceTo.find('.select__title-input');
        const $priceToDefault = $priceTo.find('.select__input').first();
        const $priceToDefaultValue = $priceToDefault.next().attr('data-value');

        $priceFromInput.val($priceFromDefaultValue);
        $priceToInput.val($priceToDefaultValue);

        if ($dropdownFilter.hasClass('price-filter')) {
            $catalogFilterBtn.find('span').first().text($priceFromDefaultValue);
            $catalogFilterBtn.find('span').last().text($priceToDefaultValue);
        } else {
            $catalogFilterBtn.find('span').empty();
        }

        $priceFromDefault.siblings().find('.select__input').prop('checked', false);
        $priceFromDefault.prop('checked', true);
        $priceToDefault.siblings().find('.select__input').prop('checked', false);
        $priceToDefault.prop('checked', true);

        $dropdownFilter.find('.checkbox__input').each(function (_, $checkbox) {
            $($checkbox).prop('checked', false);
        });
    });

    $('.dropdown-filter .checkbox__input').on('change', function () {
        const $checkboxInput = $(this);
        const $catalogFilter = $checkboxInput.closest('.catalog-filter');
        const $catalogFilterBtn = $catalogFilter.find('.catalog-filter__btn');
        const $catalogFilterBtnNum = $catalogFilterBtn.find('span');
        const $dropdownFilter = $catalogFilter.find('.dropdown-filter');
        const checkedFilters = $dropdownFilter.find('.checkbox__input:checked').length;

        if (checkedFilters > 0 && $catalogFilterBtn.find('span').length) {
            $catalogFilterBtnNum.text(`(${checkedFilters})`);
        } else {
            $catalogFilterBtnNum.empty();
        }
    });

    $('.price-filter__item:first-child .select__input').on('change', function () {
        const $selectInput = $(this);
        const $catalogFilter = $selectInput.closest('.catalog-filter');
        const $catalogFilterBtn = $catalogFilter.find('.catalog-filter__btn');
        const $priceFrom = $catalogFilterBtn.find('#price-from');

        $priceFrom.text($selectInput.next().attr('data-value'));
    });

    $('.price-filter__item:last-child .select__input').on('change', function () {
        const $selectInput = $(this);
        const $catalogFilter = $selectInput.closest('.catalog-filter');
        const $catalogFilterBtn = $catalogFilter.find('.catalog-filter__btn');
        const $priceTo = $catalogFilterBtn.find('#price-to');

        $priceTo.text($selectInput.next().attr('data-value'));
    });

    $('.price-filter__item:first-child .select__input').on('change', function () {
        const $selectInput = $(this);
        const $catalogFilter = $selectInput.closest('.catalog-filter');
        const $catalogFilterBtn = $catalogFilter.find('.catalog-filter__btn');
        const $priceFrom = $catalogFilterBtn.find('#price-from');

        $priceFrom.text($selectInput.next().attr('data-value'));
    });

    $('.price-filter__item:last-child .select__input').on('change', function () {
        const $selectInput = $(this);
        const $catalogFilter = $selectInput.closest('.catalog-filter');
        const $catalogFilterBtn = $catalogFilter.find('.catalog-filter__btn');
        const $priceTo = $catalogFilterBtn.find('#price-to');
        
        $priceTo.text($selectInput.next().attr('data-value'));
    });
});