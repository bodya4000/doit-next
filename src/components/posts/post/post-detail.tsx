'use client';

import { PrimaryTransparentButton, SecondaryButton } from '@/components/buttons';
import { useAppSelector } from '@/hooks';
import { addToComments, removeFromComments } from '@/store/comments-slice';
import { Post } from '@/types';
import { Box, useTheme } from '@mui/material';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { PostAvatar, PostCard, PostHeader, PostText, PostTitle, PostWrapper } from '.';

type Props = Post

const PostDetail = (props: Props) => {
	const theme = useTheme();
	const comments = useAppSelector(state => state.comments.comments);
	const dispatch = useDispatch();
	const onToListClick = () => {
		dispatch(addToComments(props));
	};

	const onRemoveClick = () => {
		dispatch(removeFromComments(props));
	};

	const isInList = comments.map(comment => comment.id).includes(props.id);
	return (
		<PostCard>
			<PostWrapper detail='true' sx={{ bgcolor: theme.palette.background.paper }}>
				<PostHeader detail='true'>
					<PostAvatar>{props.title[0].toUpperCase()}</PostAvatar>
					<PostTitle>{props.title}</PostTitle>
				</PostHeader>
				<PostText>{props.body}</PostText>

				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
					}}
				>
					<SecondaryButton
						disabled={!isInList}
						onClick={onRemoveClick}
						icon={'delete'}
						title='ВИДАЛИТИ'
					/>
					<PrimaryTransparentButton disabled={isInList} onClick={onToListClick} title='ДО СПИСКУ' />
				</Box>
			</PostWrapper>
		</PostCard>
	);
};

export default memo(PostDetail);
