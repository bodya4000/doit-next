import { createSlice } from '@reduxjs/toolkit';

interface DrawerState {
	isDrawerOpened: boolean;
}

const initialState: DrawerState = {
	isDrawerOpened: false,
};

export const drawerSlice = createSlice({
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

export const { closeDrawer, openDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
