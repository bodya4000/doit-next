import postReducer, { setSearchText } from '../posts-slice';

describe('postSlice', () => {
	const initialState = {
		searchText: '',
	};

	it('should return the initial state', () => {
		expect(postReducer(undefined, { type: '' })).toEqual(initialState);
	});

	it('should set the search text', () => {
		const result = postReducer(initialState, setSearchText('redux toolkit is cool'));
		expect(result.searchText).toBe('redux toolkit is cool');
	});
});
