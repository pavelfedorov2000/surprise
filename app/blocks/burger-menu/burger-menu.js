app.burger = {
	name: 'burger',
	description: 'burger-btn and burger-menu logic',
	init() {

		// jquery
        $('.burger-btn').on('click', function () {
            $('body').toggleClass('_lock');
			$('.burger-btn').toggleClass('burger-btn--active');
			$('.burger-menu').toggleClass('burger-menu--active');
		});

        $('.burger-btn').on('click', function () {
            $('body').addClass('_lock');
			$('.burger-btn').addClass('burger-btn--active');
			$('.burger-menu').addClass('burger-menu--active');
		});

        $('.burger-menu__close-btn').on('click', function () {
            $('body').removeClass('_lock');
			$('.burger-btn').removeClass('burger-btn--active');
			$('.burger-menu').removeClass('burger-menu--active');
		});

        $('.header__menu-link').on('click', function () {
            $('body').removeClass('_lock');
			$('.burger-menu').removeClass('burger-menu--active');
		});

        // native js
		const body = document.querySelector('body');
		const burgerBtn = document.querySelector('.burger-btn');
		const burgerMenu = document.querySelector('.burger-menu');
		const burgerMenuClose = document.querySelector('.burger-menu__close');
		const menuLinks = document.querySelectorAll('.menu__link');

		burgerBtn.addEventListener('click', () => {
			body.classList.toggle('_lock');
			burgerBtn.classList.toggle('burger-btn--active');
			burgerMenu.classList.toggle('burger-menu--active');
		});
		burgerBtn.addEventListener('click', () => {
			body.classList.add('_lock');
			burgerBtn.classList.add('burger-btn--active');
			burgerMenu.classList.add('burger-menu--active');
		});
		burgerMenuClose.addEventListener('click', () => {
			body.classList.remove('_lock');
			burgerBtn.classList.remove('burger-btn--active');
			burgerMenu.classList.remove('burger-menu--active');
		});
		menuLinks.forEach(link => {
			link.addEventListener('click', (e) => {
				e.preventDefault();
				body.classList.remove('_lock');
				burgerBtn.classList.remove('burger-btn--active');
				burgerMenu.classList.remove('burger-menu--active');
			});
		});
	},
};
