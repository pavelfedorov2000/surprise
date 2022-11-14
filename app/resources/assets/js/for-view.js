// Демонстрационые скрипты (для разводящей страницы) - потом уберутся
$(document).ready(function () {
    if ($('main').hasClass('auth')) {
        $('body').addClass('_lock');
        $('.overlay').show('slow');
        $('#auth-popup').addClass('active');
    }

    if ($('main').hasClass('phone-code')) {
        $('body').addClass('_lock');
        $('.overlay').show('slow');
        $('#auth-popup').addClass('active');
        $('.aside-popup__phone-auth').hide();
        $('.aside-popup__phone-code').show();
    }

    if ($('main').hasClass('password-recovery')) {
        $('body').addClass('_lock');
        $('.overlay').show('slow');
        $('#password-recovery').addClass('active');
    }
});