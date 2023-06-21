app.asideChoose = {
    name: 'asideChoose',
    description: 'your script description',
    init() {
        $('.js-choose-package').on('click', function () {
            const $radioInput = $(this);
            const $choosePackageItem = $radioInput.closest('.choose-package__item');
            const $choosePackageDropdown = $choosePackageItem.find('.choose-package__dropdown');

            const $choosePackageItems = $choosePackageItem.siblings();
            const $radioInputNotThis = $choosePackageItems.find('input[type=radio]');
            const $choosePackageDropdownNotThis = $choosePackageItems.find('.choose-package__dropdown');

            $radioInputNotThis.prop('checked', false);
            $choosePackageDropdownNotThis.slideUp();
            $choosePackageDropdown.slideDown();
        });

        $('.aside-choose-tape__btn').on('click', function () {
            const $btn = $(this);
            $('body').addClass('_lock');
            $(`#${$btn.attr('aria-controls')}`).addClass('active');
        });

        $(document).on('click', '.aside-choose__close', function () {
            const $popup = $(this).closest('.aside-choose');
            $popup.removeClass('active');
            $('body').removeClass('_lock');
        });
    },
};
