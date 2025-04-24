'use client';

import { TouchableOpacity } from '@/components/buttons';
import { BinIcon, Icon } from '@/components/icons';
import { Box, useTheme } from '@mui/material';
import { memo } from 'react';
import { PostAvatar, PostCard, PostHeader, PostText, PostTitle, PostWrapper } from '.';

interface Props {
	title: string;
	body: string;
}

const Post = ({ title, body }: Props) => {
	const theme = useTheme();

	return (
		<PostCard>
			<PostWrapper sx={{ bgcolor: theme.palette.background.paper }}>
				<PostHeader>
					<PostAvatar>{title[0].toUpperCase()}</PostAvatar>
					<PostTitle>{title}</PostTitle>

					<TouchableOpacity sx={{ alignItems: 'flex-start' }}>
						<BinIcon />
					</TouchableOpacity>
				</PostHeader>
				<PostText>{body}</PostText>

				<TouchableOpacity
					sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
				>
					<Box
						sx={{
							width: 30,
							height: 30,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'flex-start',
						}}
					>
						<Icon sx={{ color: theme.palette.text.primary }} name='arrow-right' />
					</Box>
				</TouchableOpacity>
			</PostWrapper>
		</PostCard>
	);
};

export default memo(Post);
