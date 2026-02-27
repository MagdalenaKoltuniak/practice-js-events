const init = () => {
	const div = document.querySelector('div');

	if (!div) return;

	const handleMove = () => console.log('kursor nad elementem');
	const handleLeave = () => console.log('opuszczenie elementu');

	div.addEventListener('mousemove', handleMove);
	div.addEventListener('mouseleave', handleLeave);
};

document.addEventListener('DOMContentLoaded', init);
