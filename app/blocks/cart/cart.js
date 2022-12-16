app.cart = {
  name: 'cart',
  description: 'your script description',
  init() {
    $('.js-toggle-certificate').on('click', function() {
        const $btn = $(this);
        const $cartItemToggle = $btn.closest('.cart-item').find('.cart-item__dropdown');

        if ($btn.attr('aria-expanded') === 'false') {
            $btn.attr('aria-expanded', true);
            $cartItemToggle.slideDown();
        } else {
            $btn.attr('aria-expanded', false);
            $cartItemToggle.slideUp();
        }
    });
  },
};
