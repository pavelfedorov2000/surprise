$(document).ready(function () {
  // Кнопка избранное
  $('.favorite-btn').on('click', function () {
    const $favoriteBtn = $(this);

    $favoriteBtn.toggleClass('active');
    if ($favoriteBtn.hasClass('active')) {
      $favoriteBtn.attr('aria-label', 'Удалить из избранного');
    } else {
      $favoriteBtn.attr('aria-label', 'Добавить в избранное');
    }
  });

  // Кнопка сравнение
  /* $('.js-compare-btn').on('click', function () {
      const $compareBtn = $(this);

      $compareBtn.toggleClass('compare');
      if ($compareBtn.hasClass('compare')) {
          $compareBtn.attr('aria-label', 'Удалить из списка для сравнения');
      } else {
          $compareBtn.attr('aria-label', 'Добавить в список для сравнения');
      }
  });

  // Кнопка добавить в корзину (круглая с иконкой)
  $('.js-add-to-cart').on('click', function () {
      const $cartBtn = $(this);

      $cartBtn.toggleClass('active');
      if ($cartBtn.hasClass('active')) {
          $cartBtn.attr('aria-label', 'Удалить из корзины');
      } else {
          $cartBtn.attr('aria-label', 'Добавить в корзину');
      }
  }); */
});