const btnElements = document.querySelectorAll('button');

const handleClick = e => {
	e.target.textContent = 'clicked';
	console.log(e.target.textContent);
	e.target.removeEventListener('click', handleClick);
};

btnElements.forEach(btn => {
	btn.addEventListener('click', handleClick);
});
