class Location {
	getDirectory(id, list) {
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
	
	getSelected(location) {
		return location.slice(1)
		.split('-')
		.filter(cat => cat !== '');
	}
}

export const location = new Location();