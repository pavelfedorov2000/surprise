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
});