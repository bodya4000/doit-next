import { Divider, Typography, useTheme } from '@mui/material';

const CommentsModalHeader = () => {
	const theme = useTheme();
	return (
		<>
			<Typography
				sx={{ color: theme.palette.text.primary }}
				id='comments-modal-title'
				variant='h4'
				component='h2'
			>
				Коментарі
			</Typography>
			<Divider sx={{ mt: 2 }} />
		</>
	);
};

export default CommentsModalHeader;
