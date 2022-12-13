app.starRating = {
    name: 'starRating',
    description: 'star rating script',
    init() {
        const ratings = document.querySelectorAll('.rating');
        console.log(ratings);

        if (ratings.length > 0) {
            initRatings();
        }

        function initRatings() {
            let ratingActive, ratingValue;

            for (let index = 0; index < ratings.length; index++) {
                const rating = ratings[index];
                initRating(rating);
            }

            function initRating(rating) {
                initRatingStars(rating);
                setRatingActiveWidth();
            }

            function initRatingStars(rating) {
                ratingActive = rating.querySelector('.rating__active');
                ratingValue = rating.querySelector('.rating__num');
                console.log(ratingValue);
            }

            function setRatingActiveWidth(index = ratingValue.textContent) {
                const ratingActiveWidth = index / 0.05;
                console.log(ratingActiveWidth);
                ratingActive.style.width = `${ratingActiveWidth}%`
            }
        }
    },
};
