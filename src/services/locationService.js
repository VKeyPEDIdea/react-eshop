class Location {
	getDirectory(currentLocation, id) {
		let path = '';
		let list = currentLocation.slice(1).split('/');
		
		for (let name of list) {
			if (name !== id) {
				// console.log(name, id);
				path += '/' + name;
			}	else {
				break;
			}
		}	
		// console.log(path);
		return path;
	}
	
	getSelected(location) {
		return location.slice(1)
			.split('/')
			.filter(cat => cat !== '' && cat !== 'catalog');
	}
}

export const location = new Location();