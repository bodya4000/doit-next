import { Post } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommentsState {
	comments: Post[];
	isCommentsModalOpen: boolean;
}

const initialState: CommentsState = {
	comments: [],
	isCommentsModalOpen: false,
};

export const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {
		addToComments(state, action: PayloadAction<Post>) {
			state.comments.push(action.payload);
		},
		removeFromComments(state, action: PayloadAction<Post>) {
			state.comments = state.comments.filter(post => post.id !== action.payload.id);
		},
		openCommentsModal(state) {
			state.isCommentsModalOpen = true;
		},
		closeCommentsModal(state) {
			state.isCommentsModalOpen = false;
		},

	},
});

export const { addToComments, removeFromComments, openCommentsModal, closeCommentsModal } =
	commentsSlice.actions;

export default commentsSlice.reducer;
