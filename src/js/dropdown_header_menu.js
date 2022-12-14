// Dropdown Menu
const dropdown = document.querySelectorAll('.menu__dropdown');
const dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	const button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu'),
			arrow = button.querySelector('.menu__icon-arrow');

	button.onclick = function(event) {
		if (!menu.hasClass('show')) {
			console.log("Hello!");
			menu.classList.add('show');
			menu.classList.remove('hide');
			arrow.classList.add('open');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
			menu.classList.remove('show');
			menu.classList.add('hide');
			arrow.classList.remove('open');
			arrow.classList.add('close');
			event.preventDefault();
		}
	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};