import { configureStore } from '@reduxjs/toolkit';
import appSnackBarReducer from './app-snack-bar-slice';
import commentsReducer from './comments-slice';
import createPostReducer from './create-post-slice';
import drawerReducer from './drawer-slice';
import postReducer from './posts-slice';

export const store = configureStore({
	reducer: {
		drawer: drawerReducer,
		post: postReducer,
		comments: commentsReducer,
		createPost: createPostReducer,
		appSnackBar: appSnackBarReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
