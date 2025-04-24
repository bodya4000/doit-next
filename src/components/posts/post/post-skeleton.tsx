import { Box, Skeleton } from '@mui/material';
import { PostCard, PostWrapper, SkeletonAvatar, SkeletonLine } from '.';

export const PostSkeleton = () => {
	return (
		<PostCard>
			<PostWrapper>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						gap: 2,
					}}
				>
					<SkeletonAvatar variant='circular' />
					<Box sx={{ flex: 1 }}>
						<SkeletonLine variant='text' width='100%' height={20} />
						<SkeletonLine variant='text' width='80%' height={20} />
					</Box>
					<Skeleton variant='rectangular' width={24} height={24} sx={{ borderRadius: 2 }} />
				</Box>

				<SkeletonLine variant='text' width='100%' height={16} />
				<SkeletonLine variant='text' width='90%' height={16} />
				<SkeletonLine variant='text' width='80%' height={16} />
			</PostWrapper>
		</PostCard>
	);
};
