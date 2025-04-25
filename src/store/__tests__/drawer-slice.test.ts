import drawerReducer, { openDrawer, closeDrawer } from '../drawer-slice';

describe('drawerSlice', () => {
	const initialState = {
		isDrawerOpened: false,
	};

	it('should return the initial state', () => {
		expect(drawerReducer(undefined, { type: '' })).toEqual(initialState);
	});

	it('should open the drawer', () => {
		const result = drawerReducer(initialState, openDrawer());
		expect(result.isDrawerOpened).toBe(true);
	});

	it('should close the drawer', () => {
		const state = { isDrawerOpened: true };
		const result = drawerReducer(state, closeDrawer());
		expect(result.isDrawerOpened).toBe(false);
	});
});
