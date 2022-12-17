app.cart = {
    name: 'cart',
    description: 'your script description',
    init() {
        $('.js-toggle-certificate').on('click', function () {
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

        $('.radio-input').each(function (i, $el) {
            const $radioInput = $($el);

            if ($radioInput.is(':checked')) {
                $radioInput.closest('.radio').find('.radio__dropdown').show();
            }
        });

        $('.radio-input').on('change', function () {
            const $radioInput = $(this);
            const $radio = $radioInput.closest('.radio');
            const $radioNotActive = $radio.siblings();

            if ($radioInput.is(':checked')) {
                $radioNotActive.find('.radio__dropdown').slideUp();
                $radio.find('.radio__dropdown').slideDown();
            }
        });
    },
};
