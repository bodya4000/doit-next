import { PrimaryButton, PrimaryTransparentButton } from '@/components';
import { showSnackbar } from '@/store/app-snack-bar-slice';
import { reset } from '@/store/create-post-slice';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

const ResultModalFooter = () => {
	const route = useRouter();
	const dispatch = useDispatch();

	const onClose = () => {
		dispatch(reset());
	};

	const onBtnClick = () => {
		dispatch(showSnackbar({ message: 'Збережено !' }));
		onClose();
		route.replace('/posts');
	};
	return (
		<>
			<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', flex: 1 }}>
				<PrimaryTransparentButton disabled={true} title='Редагувати' />
				<PrimaryButton onClick={onBtnClick} title='Підтвердити' />
			</Box>
		</>
	);
};

export default ResultModalFooter;
