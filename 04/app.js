const divs = document.querySelectorAll('div');

const addClassToElement = function () {
	setTimeout(() => {
		this.classList.add('clicked');
	}, Number(this.dataset.time));
};

divs.forEach(div => {
	div.addEventListener('click', addClassToElement);
});

const clickedBody = function (e) {
	if (e.target === document.body) {
		divs.forEach(div => {
			div.classList.remove('clicked');
		});
	}
};

document.body.addEventListener('click', clickedBody);
