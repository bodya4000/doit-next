import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CreatePostState {
	step: number;
	title: string;
	body: string;
	isCommentsModalOpen: boolean;
}

const initialState: CreatePostState = {
	step: 1,
	title: '',
	body: '',
	isCommentsModalOpen: false,
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
	},
});

export const { nextStep, prevStep, setBody, setTitle } = createPostSlice.actions;

export default createPostSlice.reducer;
