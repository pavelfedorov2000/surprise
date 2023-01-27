$(function () {
    $('.search-form__btn').on('click', function () {
        const $searchFormBtn = $(this);
        const $searchForm = $searchFormBtn.closest('.search-form');
        const $searchFormInput = $searchForm.find('.search-form__input');
        const $dropSearch = $searchForm.find('.drop-search');

        if ($searchForm.hasClass('active') && $searchFormBtn.attr('type') === 'button') {
            $searchForm.removeClass('active');
            $searchFormInput.removeClass('active');
        } else {
            $searchForm.addClass('active');
            $searchFormInput.addClass('active');
        }

        if ($searchFormInput.val() !== '') {
            $dropSearch.addClass('active');
            //$searchFormBtn.attr('aria-label', 'Искать');
            setTimeout(() => {
                $searchFormBtn.attr('type', 'submit');
            }, 300);
        } else {
            $dropSearch.removeClass('active');
            $searchFormBtn.attr('type', 'button');
            $searchFormBtn.attr('aria-label', 'Открыть поиск по сайту');
        }
    });

    $('.search-form__input').on('change keyup', function () {
        const $searchFormInput = $(this);
        const $searchForm = $searchFormInput.closest('.search-form');
        const $dropSearch = $searchForm.find('.drop-search');
        const $searchFormBtn = $searchForm.find('.search-form__btn');

        if ($searchFormInput.val() !== '') {
            $dropSearch.addClass('active');
            $searchFormBtn.attr('type', 'submit');
        } else {
            $dropSearch.removeClass('active');
            $searchFormBtn.attr('type', 'button');
        }
    });

    $(document).on('mouseup', function (e) {
        const $searchForm = $('.search-form');
        const $searchFormInput = $searchForm.find('.search-form__input');
        const $searchFormBtn = $searchForm.find('.search-form__btn');
        const $dropSearch = $searchForm.find('.drop-search');

        if (!$searchForm.is(e.target) && $searchForm.has(e.target).length === 0) {
            $searchForm.removeClass('active');
            $searchFormInput.removeClass('active');
            $dropSearch.removeClass('active');
            $searchFormBtn.attr('type', 'button');
        }
    });
});