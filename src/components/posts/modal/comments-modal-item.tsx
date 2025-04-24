import { Box, Typography, useTheme } from '@mui/material';

interface Props {
	title: string;
	body: string;
}

const CommentsModalItem = ({ title, body }: Props) => {
	const theme = useTheme();
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

export default CommentsModalItem;
