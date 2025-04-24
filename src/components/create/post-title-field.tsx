import { useAppSelector } from '@/hooks';
import { setTitle } from '@/store/create-post-slice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { FormTextField } from '../fields';

const PostTitleField = () => {
	const title = useAppSelector(state => state.createPost.title);
	const dispatch = useDispatch();
	const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setTitle(e.target.value));
	};
	return <FormTextField label='Заголовок' value={title} onChange={onChangeTitle} />;
};

export default PostTitleField;
