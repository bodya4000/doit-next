import { AppModal } from '@/components';
import { closeCommentsModal } from '@/store/comments-slice';
import { useDispatch } from 'react-redux';
import { CommentsModalBody, CommentsModalHeader } from '.';

const CommentsModal = ({}) => {
	const dispatch = useDispatch();
	const onClose = () => {
		dispatch(closeCommentsModal());
	};
	return (
		<AppModal
			onClose={onClose}
			aria-labelledby={'comments-modal-title'}
			aria-describedby={'comments-modal-description'}
			renderBody={() => <CommentsModalBody />}
			renderHeader={() => <CommentsModalHeader />}
		/>
	);
};

export default CommentsModal;
