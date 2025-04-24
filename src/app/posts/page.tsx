'use client';

import { Header, PageContainer, Post } from '@/components';
import { Box } from '@mui/material';

export default function Posts() {
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
					<Post />
					<Post />
					<Post />
				</Box>
			</PageContainer>
		</>
	);
}
