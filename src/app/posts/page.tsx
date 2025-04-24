'use client';

import { Header, PageContainer, Post } from '@/components';
import { usePosts } from '@/hooks';
import { Box } from '@mui/material';

export default function Posts() {
	const { data } = usePosts();
	console.log(data);
	console.log(data);
	
	
	return (
		<>
			<Header />
			<PageContainer>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
					}}
				>
					{data &&
						data.map(item => {
							return <Post key={item.id} {...item} />;
						})}
				</Box>
			</PageContainer>
		</>
	);
}
