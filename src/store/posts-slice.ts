import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PostsState {
	searchText: string;
}

const initialState: PostsState = {
	searchText: '',
};

export const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setSearchText(state, actions: PayloadAction<string>) {
			state.searchText = actions.payload;
		},
	},
});

export const { setSearchText } = postSlice.actions;

export default postSlice.reducer;
