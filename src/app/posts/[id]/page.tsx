'use client';

import { CommentsModal, Header, PageContainer, PostDetail } from '@/components';
import { useAppSelector, usePostById } from '@/hooks';
import { CircularProgress } from '@mui/material';
import { useParams } from 'next/navigation';

export default function PostPage() {
	const params = useParams();
	const postId = params?.id as string;

	const { data, isLoading } = usePostById(Number(postId));
	const isCommentsModalOpen = useAppSelector(state => state.comments.isCommentsModalOpen);
	return (
		<>
			<Header comments={true} />
			{isCommentsModalOpen && <CommentsModal />}
			<PageContainer>
				{isLoading && <CircularProgress />}
				{data && <PostDetail {...data[0]} />}
			</PageContainer>
		</>
	);
}
