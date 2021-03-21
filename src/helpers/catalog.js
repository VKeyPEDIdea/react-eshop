export function getDirectory(id, list) {
	let path = '';
	for (let name of list) {
		if (name !== id) {
			path += name + '-';
		}	else {
		break;
		}
	}	
	return path;
}

export function getSelected(location) {
	return location.slice(1)
	.split('-')
	.filter(cat => cat !== '');
}