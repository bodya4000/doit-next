import { useAppSelector } from '@/hooks';
import { setBody } from '@/store/create-post-slice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { FormTextField } from '../fields';

const PostBodyField = () => {
	const body = useAppSelector(state => state.createPost.body);
	const dispatch = useDispatch();
	const onChangeBody = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setBody(e.target.value));
	};
	return <FormTextField label='Тіло' value={body} onChange={onChangeBody} />;
};

export default PostBodyField;
