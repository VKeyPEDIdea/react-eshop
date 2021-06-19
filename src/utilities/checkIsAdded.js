export const checkIsAdded = (productId, basket) => {
	let result = false;
	basket.forEach(({ id }) => {
		if (id === productId) {
			result = true;
			return result;
		};
	});
	return result;
};