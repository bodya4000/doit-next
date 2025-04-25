import { useAppSelector } from '@/hooks';
import { CommentsModalItem } from '.';

const CommentsModalBody = () => {
	const comments = useAppSelector(state => state.comments.comments);

	return (
		<>
			{comments.map(comment => (
				<CommentsModalItem key={comment.id} title={comment.title} body={comment.body} />
			))}
		</>
	);
};

export default CommentsModalBody;
