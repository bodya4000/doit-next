import { useAppSelector } from '@/hooks';
import { closeCommentsModal } from '@/store/comments-slice';
import { Divider, Modal, Typography, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';
import CommentsModalItem from './comments-modal-item';
import { ModalBody, ModalContainer, ModalHeader } from './styled';

const CommentsModal = ({}) => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const onClose = () => {
		dispatch(closeCommentsModal());
	};
	const comments = useAppSelector(state => state.comments.comments);
	return (
		<Modal
			open={true}
			onClose={onClose}
			aria-labelledby='comments-modal-title'
			aria-describedby='comments-modal-description'
		>
			<ModalContainer>
				<ModalHeader>
					<Typography
						sx={{ color: theme.palette.text.primary }}
						id='comments-modal-title'
						variant='h4'
						component='h2'
					>
						Коментарі
					</Typography>
					<Divider />
				</ModalHeader>

				<ModalBody>
					{comments.map(comment => (
						<>
							<CommentsModalItem key={comment.id} title={comment.title} body={comment.body} />
						</>
					))}
				</ModalBody>
			</ModalContainer>
		</Modal>
	);
};

export default CommentsModal;
