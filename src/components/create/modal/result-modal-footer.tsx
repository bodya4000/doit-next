import { PrimaryButton, PrimaryTransparentButton } from '@/components';
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
		onClose();
		route.replace('/posts');
	};
	return (
		<Box sx={{ display:'flex', flexDirection: 'row', justifyContent: 'flex-end', flex:1}}>
			<PrimaryTransparentButton onClick={onBtnClick} title='Редагувати' />
			<PrimaryButton onClick={onBtnClick} title='Зберегти' />
		</Box>
	);
};

export default ResultModalFooter;
