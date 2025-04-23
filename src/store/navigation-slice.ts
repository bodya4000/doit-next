import { createSlice } from '@reduxjs/toolkit';

interface NavigationState {
	isDrawerOpened: boolean;
}

const initialState: NavigationState = {
	isDrawerOpened: false,
};

export const navigationSlice = createSlice({
	name: 'drawer',
	initialState,
	reducers: {
		closeDrawer(state) {
			state.isDrawerOpened = false;
		},
		openDrawer(state) {
			state.isDrawerOpened = true;
		},
	},
});

export const { closeDrawer, openDrawer } = navigationSlice.actions;

export default navigationSlice.reducer;
