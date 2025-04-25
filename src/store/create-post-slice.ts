import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CreatePostState {
	step: number;
	title: string;
	body: string;
	isResultModalOpen: boolean;
}

const initialState: CreatePostState = {
	step: 1,
	title: '',
	body: '',
	isResultModalOpen: false,
};

export const createPostSlice = createSlice({
	name: 'createPost',
	initialState,
	reducers: {
		nextStep(state) {
			state.step = state.step + 1;
		},
		prevStep(state) {
			state.step = state.step - 1;
		},
		setTitle(state, action: PayloadAction<string>) {
			state.title = action.payload;
		},
		setBody(state, action: PayloadAction<string>) {
			state.body = action.payload;
		},

		openResultModal(state) {
			state.isResultModalOpen = true;
		},
		closeResultModal(state) {
			state.isResultModalOpen = false;
		},
		reset(state) {
			state.body = '';
			state.title = '';
			state.step = 1;
			state.isResultModalOpen = false;
		},
	},
});

export const { nextStep, prevStep, setBody, setTitle, openResultModal, closeResultModal ,reset} =
	createPostSlice.actions;

export default createPostSlice.reducer;
