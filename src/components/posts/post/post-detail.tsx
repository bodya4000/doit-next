'use client';

import { PrimaryTransparentButton, SecondaryButton } from '@/components/buttons';
import { Box, useTheme } from '@mui/material';
import { memo } from 'react';
import { PostAvatar, PostCard, PostHeader, PostText, PostTitle, PostWrapper } from '.';

interface Props {
	id: number;
	title: string;
	body: string;
}

const PostDetail = ({ title, body }: Props) => {
	const theme = useTheme();

	return (
		<PostCard>
			<PostWrapper detail='true' sx={{ bgcolor: theme.palette.background.paper }}>
				<PostHeader detail='true'>
					<PostAvatar>{title[0].toUpperCase()}</PostAvatar>
					<PostTitle>{title}</PostTitle>
				</PostHeader>
				<PostText>{body}</PostText>

				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
					}}
				>
					<SecondaryButton icon={'delete'} title='ВИДАЛИТИ' />
					<PrimaryTransparentButton title='ДО СПИСКУ' />
				</Box>
			</PostWrapper>
		</PostCard>
	);
};

export default memo(PostDetail);
