import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './comments-slice';
import createPostReducer from './create-post-slice';
import navigationReducer from './navigation-slice';
import postReducer from './posts-slice';

export const store = configureStore({
	reducer: {
		navigation: navigationReducer,
		post: postReducer,
		comments: commentsReducer,
		createPost: createPostReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
