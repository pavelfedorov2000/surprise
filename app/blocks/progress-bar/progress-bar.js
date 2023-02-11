app.progressbar = {
    name: 'progressbar',
    description: 'progressbar',
    init() {
        $(".js-progress-bar").each(function (i, item) {
            const circle = $(item);
            const dataProgress = circle.closest('.metric-reviews__num').attr('data-progress');
            const strokeDashOffsetValue = 100 - (+dataProgress * 100);
            circle.css("stroke-dashoffset", strokeDashOffsetValue);
        });
    },
};
