'use client';
import { CreatePostForm, Header, PageContainer, ResultModal } from '@/components';
import { useAppSelector } from '@/hooks';

const Create = () => {
	const isResultModalOpen = useAppSelector(state => state.createPost.isResultModalOpen);
	return (
		<>
			<Header />
			{isResultModalOpen && <ResultModal />}
			<PageContainer>
				<CreatePostForm />
			</PageContainer>
		</>
	);
};

export default Create;
