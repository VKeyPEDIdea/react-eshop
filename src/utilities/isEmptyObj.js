export function isEmptyObj(obj) {
	return !Object.values(obj).length ? true : false;
}