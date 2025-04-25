import { useAppSelector } from '@/hooks';
import { Box, Typography, useTheme } from '@mui/material';

const ResultModalItem = () => {
	const theme = useTheme();
	const title = useAppSelector(state => state.createPost.title);
	const body = useAppSelector(state => state.createPost.body);
	return (
		<Box>
			<Typography sx={{ color: theme.palette.text.primary }} variant='h5'>
				{title}
			</Typography>
			<Typography sx={{ color: theme.palette.text.primary }} variant='body2'>
				{body}
			</Typography>
		</Box>
	);
};

export default ResultModalItem;
