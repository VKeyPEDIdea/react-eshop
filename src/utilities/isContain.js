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