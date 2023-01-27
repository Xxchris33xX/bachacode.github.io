const wait = (delay = 0) =>
	new Promise(resolve => setTimeout(resolve, delay));

const setVisible = (elementOrSelector, visible) => {
	let element = document.querySelector(elementOrSelector);
	if (visible) {
		element.classList.add('loaded');
		document.body.classList.remove('overflow-hidden');
	} else
		element.classList.add('hidden');
}

document.addEventListener('alpine:init', () =>
	wait(100).then(() => {
		window.scrollTo(0, 0);
	}));

document.addEventListener('alpine:init', () =>
	wait(300).then(() => {
		setVisible('.page', true);
		setVisible('.footer', true);
		setVisible('#loading', false);
	}));

document.addEventListener('alpine:init', () => {
	const observer = new IntersectionObserver((e) => {
		e.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
			} else {
				entry.target.classList.remove('show');
			}
		});
	});
	const sectionElements = document.querySelectorAll('.section');
	sectionElements.forEach((el) => observer.observe(el));
})