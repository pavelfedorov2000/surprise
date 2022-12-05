app.asideChoose = {
  name: 'asideChoose',
  description: 'your script description',
  init() {
    // choose package

    $('.js-choose-package').on('click', function () {
      const $radioInput = $(this);
      const $choosePackageItem = $radioInput.closest('.choose-package__item');
      const $choosePackageDropdown = $choosePackageItem.find('.choose-package__dropdown');

      const $choosePackageItems = $choosePackageItem.siblings();
      const $radioInputNotThis = $choosePackageItems.find('input[type=radio');
      const $choosePackageDropdownNotThis = $choosePackageItems.find('.choose-package__dropdown');

      $radioInputNotThis.prop('checked', false);
      $choosePackageDropdownNotThis.slideUp();

      $choosePackageDropdown.slideDown();
    });
  },
};
