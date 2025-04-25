import { Divider, Typography, useTheme } from '@mui/material';

const ResultModalHeader = () => {
	const theme = useTheme();

	return (
		<>
			<Typography
				sx={{ color: theme.palette.text.primary }}
				id='comments-modal-title'
				variant='h4'
				component='h2'
			>
				Попередній перегляд
			</Typography>
			<Divider sx={{ mt: 2 }} />
		</>
	);
};

export default ResultModalHeader;
