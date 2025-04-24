'use client';

import { TouchableOpacity } from '@/components/buttons';
import { BinIcon, Icon } from '@/components/icons';
import { Box, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { memo } from 'react';
import { PostAvatar, PostCard, PostHeader, PostText, PostTitle, PostWrapper } from '.';

interface Props {
	id: number;
	title: string;
	body: string;
}

const Post = ({ id, title, body }: Props) => {
	const theme = useTheme();
	const router = useRouter();
	const onCardClick = () => {
		router.push('/posts/' + id);
	};

	return (
		<PostCard>
			<PostWrapper sx={{ bgcolor: theme.palette.background.paper }}>
				<PostHeader>
					<PostAvatar>{title[0].toUpperCase()}</PostAvatar>
					<PostTitle>{title}</PostTitle>

					<TouchableOpacity onClick={() => {}} sx={{ alignItems: 'flex-start' }}>
						<BinIcon />
					</TouchableOpacity>
				</PostHeader>
				<PostText>{body}</PostText>

				<TouchableOpacity
					onClick={onCardClick}
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
