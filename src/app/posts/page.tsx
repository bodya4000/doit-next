'use client';

import { Header, PageContainer, Post, PostSearch, PostSpeedDial } from '@/components';
import { PostSkeleton } from '@/components/posts/post';
import { usePosts } from '@/hooks';
import { Box } from '@mui/material';

export default function Posts() {
	const { data, isLoading } = usePosts();

	return (
		<>
			<Header />
			<PageContainer>
				<PostSearch />
				<PostSpeedDial />
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
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
