app.accordion = {
  name: 'accordion',
  description: 'your script description',
  init() {
    $('.accordion-item__toggle').on('click', function () {
      const $accordionItemToggle = $(this);
      const $accordion = $accordionItemToggle.closest('.accordion-item');
      const $accordionItemContent = $accordion.find('.accordion-item__content');

      if ($accordionItemToggle.attr('aria-expanded') === 'false') {
        $accordionItemToggle.attr('aria-expanded', true);
        $accordionItemContent.slideDown();
      } else {
        $accordionItemToggle.attr('aria-expanded', false);
        $accordionItemContent.slideUp();
      }
    });
  },
};
