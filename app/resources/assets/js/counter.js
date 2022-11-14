$(document).ready(function () {
    $(document).on('click', '.minus-btn', function (e) {
        e.preventDefault();
        var $btn = $(this);
        var $input = $btn.next();
        var value = parseInt($input.val());
        while (value > 0) {
            value -= 1;
            break;
        }
        $input.val(value);
    });

    $(document).on('click', '.plus-btn', function (e) {
        e.preventDefault();
        var $btn = $(this);
        var $input = $btn.prev();
        var value = parseInt($input.val());
        value += 1;
        $input.val(value);
    });
});