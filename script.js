let buttonShow = document.querySelector('.brands__button--visible')
let buttonHide = document.querySelector('.brands__button--hidden')
let heightList = document.querySelector('.brands__list')

buttonShow.addEventListener('click', function () {
	buttonHide.classList.remove('brands__button--hidden')
	buttonShow.classList.add('brands__button--hidden')
	heightList.classList.add('brands__list--maxHeight')
})

buttonHide.addEventListener('click', function () {
	buttonHide.classList.add('brands__button--hidden')
	buttonShow.classList.remove('brands__button--hidden')
	heightList.classList.remove('brands__list--maxHeight')
})

if (window.innerWidth < 768) {
	let head = document.querySelector('head')
	let link = document.createElement('link')
	link.rel = 'stylesheet'
	link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
	head.appendChild(link)
	const swiper = new Swiper('.swiper', {
		direction: 'horizontal',
		loop: true,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicsBullets: true,
		},
		slidesPerView: 'auto',
		//spaceBetween: 16,
	})
}
