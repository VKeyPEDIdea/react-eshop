export function updateObject(object, newProps) {
	return {
		...object,
		...newProps,
	};
};