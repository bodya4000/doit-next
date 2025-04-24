'use client';

import { useTheme } from '@mui/material';
import { memo } from 'react';
import { PostCard, PostHeader, PostWrapper, SkeletonAvatar, SkeletonLine } from '.';

const PostDetailSkeleton = () => {
	const theme = useTheme();

	return (
		<PostCard>
			<PostWrapper detail='true' sx={{ bgcolor: theme.palette.background.paper }}>
				<PostHeader detail='true'>
					<SkeletonAvatar variant='circular' />
					<SkeletonLine />
				</PostHeader>
				<SkeletonLine />
				<SkeletonLine />
			</PostWrapper>
		</PostCard>
	);
};

export default memo(PostDetailSkeleton);
