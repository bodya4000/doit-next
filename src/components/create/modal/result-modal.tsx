import { PrimaryButton, PrimaryTransparentButton } from '@/components/buttons';
import { reset } from '@/store/create-post-slice';
import { Divider, Modal, Typography, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import ResultModalItem from './result-modal-item';
import { ModalBody, ModalContainer, ModalHeader } from './styled';

const ResultModal = ({}) => {
	const theme = useTheme();
	const route = useRouter();
	const dispatch = useDispatch();
	const onClose = () => {
		dispatch(reset());
	};

	const onBtnClick = () => {
		onClose();
		route.replace('/posts');
	};
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
						Попередній перегляд
					</Typography>
					<Divider />
				</ModalHeader>

				<ModalBody>
					<ResultModalItem />
				</ModalBody>
				<Divider />
				<ModalBody sx={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
					<PrimaryTransparentButton onClick={onBtnClick} title='Редагувати' />
					<PrimaryButton onClick={onBtnClick} title='Зберегти' />
				</ModalBody>
			</ModalContainer>
		</Modal>
	);
};

export default ResultModal;
