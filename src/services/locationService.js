class Location {
	getDirectory(currentLocation, id) {
		let path = '';
		let list = currentLocation.slice(1).split('/');
		
		for (let name of list) {
			if (name !== id) {
				path += '/' + name;
			}	else {
				break;
			}
		}	
		return path;
	}
	
	getSelected(location) {
		return location.slice(1)
			.split('/')
			.filter(cat => cat !== '' && cat !== 'catalog');
	}

	getCurrentCategory(location) {
		return this.getSelected(location).pop() || '';
	}

	getCurrentProductName(location) {
		return location.slice(1)
			.split('/')
			.pop() || '';
	}
}

export const location = new Location();