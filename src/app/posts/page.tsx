'use client';

import { Header, PageContainer, Post, PostSearch, PostSkeleton, PostSpeedDial } from '@/components';
import { usePosts } from '@/hooks';
import { Box } from '@mui/material';

export default function Posts() {
	const { data, isLoading } = usePosts();

	return (
		<>
			<Header title='Усі пости' />
			<PageContainer>
				<PostSearch />
				<PostSpeedDial />
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
					}}
				>
					{isLoading && Array.from({ length: 15 }).map((_, i) => <PostSkeleton key={i} />)}

					{data &&
						data.map(item => {
							return <Post key={item.id} {...item} />;
						})}
				</Box>
			</PageContainer>
		</>
	);
}
