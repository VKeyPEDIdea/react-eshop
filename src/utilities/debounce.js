export function debounce(func, time) {
	let timeout;

	return function(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, time);
	}
}