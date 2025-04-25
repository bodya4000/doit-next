import { Severities } from '@/enums';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SnackbarState {
	open: boolean;
	message: string;
	severity: Severities;
}

const initialState: SnackbarState = {
	open: false,
	message: '',
	severity: Severities.SUCCESS,
};

export const snackbarSlice = createSlice({
	name: 'snackbar',
	initialState,
	reducers: {
		showSnackbar: (state, action: PayloadAction<{ message: string; severity?: Severities }>) => {
			state.open = true;
			state.message = action.payload.message;
			state.severity = action.payload.severity || Severities.SUCCESS;
		},
		closeSnackbar: state => {
			state.open = false;
			state.message = '';
		},
	},
});

export const { showSnackbar, closeSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
