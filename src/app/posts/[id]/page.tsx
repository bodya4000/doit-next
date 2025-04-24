'use client';

import { Header, PageContainer, PostDetail } from '@/components';
import { usePostById } from '@/hooks';
import { CircularProgress } from '@mui/material';
import { useParams } from 'next/navigation';

export default function PostPage() {
	const params = useParams();
	const postId = params?.id as string;

	const { data, isLoading } = usePostById(Number(postId));

	return (
		<>
			<Header />
			<PageContainer>
				{isLoading && <CircularProgress />}
				{data && <PostDetail {...data[0]} />}
			</PageContainer>
		</>
	);
}
