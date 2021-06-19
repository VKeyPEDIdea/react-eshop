export const getItemCount = (productId, basket) => {
	let amount = 0;
	basket.forEach(({ id, count }) => {
		if (id === productId) {
			amount = count;
			return amount;
		};
	});
	return amount;
};