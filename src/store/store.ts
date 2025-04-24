import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './navigation-slice';
import postReducer from './posts-slice';

export const store = configureStore({
	reducer: {
		navigation: navigationReducer,
		post: postReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
