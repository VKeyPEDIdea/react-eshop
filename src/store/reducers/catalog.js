import * as actionTypes from '../actions/actionTypes';

const initialState = {
	categories: {
		'sushi': {
			id: 'sushi',
			title: 'Суши',
			selected: false,
			children: {
				'nigiri': {
					id: 'nigiri',
					title: 'Нигири',
					selected: false,
					children: {
						'abi': {
							id: 'abi',
							title: 'Эби',
							selected: false,
							children: null,
						},
						'syake': {
							id: 'syake',
							title: 'Сяке',
							selected: false,
							children: null,
						},
						'kunsei': {
							id: 'kunsei',
							title: 'Кунсей',
							selected: false,
							children: null,
						},
					},
				},
				'gunkany': {
					id: 'gunkany',
					title: 'Гунканы',
					selected: false,
					children: null,
				},
				'sashimi': {
					id: 'sashimi',
					title: 'Сашими',
					selected: false,
					children: null,
				},
			},
		},
		'rolls': {
			id: 'rolls',
			title: 'Роллы',
			selected: false,
			children: {
				'classic': {
					id: 'classic',
					title: 'Классические',
					selected: false,
					children: null,
				},
				'warm': {
					id: 'warm',
					title: 'Теплые',
					selected: false,
					children: null,
				},
				'corporative': {
					id: 'corporative',
					title: 'Фирменные',
					selected: false,
					children: null,
				},
			},
		},
		'burgers': {
			id: 'burgers',
			title: 'Бургеры',
			selected: false,
			children: {
				'chicken': {
					id: 'chicken',
					title: 'С курицей',
					selected: false,
					children: null,
				},
				'beef': {
					id: 'beef',
					title: 'С говядиной',
					selected: false,
					children: null,
				},
				'cheeze': {
					id: 'cheeze',
					title: 'С сыром',
					selected: false,
					children: null,
				},
			},
		},
	}
};

function updateCategories(categories, id) {
	return {
		...categories,
		[id]: {
			...categories[id],
			selected: !categories[id].selected,
		}
	}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_CATEGORY:
			const newCategories = updateCategories(state.categories, action.payload.id);
			return {...state, categories: newCategories};
		default:
			return state;
	}
};

export default reducer;