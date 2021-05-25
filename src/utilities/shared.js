export function updateObject(object, newProps) {
	return {
		...object,
		...newProps,
	};
}

/**
 * framework storage function. Get or set value to localStorage.
 * Put some data to second attribute to set value.
 * Put only key attribute to get value by this key.
 * @param {string} key Key object of localStorage cell
 * @param {*} data Data to storage
 */
 export function storage(key, data = null) {
  if (!data) return JSON.parse(localStorage.getItem(key));

  localStorage.setItem(key, JSON.stringify(data));
  return true;
}

export function isEmptyObj(obj) {
	return !Object.values(obj).length ? true : false;
}

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

/**
 * The function checks for the presence of a search query in the specified sources
 * @param {string} queryString Query search string to find
 * @param {array} source List of string where we are looking
 * @returns 
 */
export function isContain(queryString, source) {
	let isInclude = true;
	queryString = queryString.toLowerCase();
	
	for (let i = 0; i < source.length; i++) {
		isInclude = source[i].toLowerCase()
			.includes(queryString);
		if (isInclude) return isInclude;
	}

	return false;
}