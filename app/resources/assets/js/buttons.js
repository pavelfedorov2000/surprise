$(function () {
    const favoriteButtonTextMap = new Map();
    const favoriteButtonTextArray = ['Добавить в избранное', 'Удалить из избранного'];

    favoriteButtonTextArray.forEach((item, index) => {
        favoriteButtonTextMap.set(Boolean(index), item);
    });

    $('.favorite-btn').on('click', function () {
        const $favoriteBtn = $(this);

        $favoriteBtn.toggleClass('active');
        if ($favoriteBtn.hasClass('active')) {
            $favoriteBtn.attr('aria-label', favoriteButtonTextMap.get(true));
        } else {
            $favoriteBtn.attr('aria-label', favoriteButtonTextMap.get(false));
        }
    });
});