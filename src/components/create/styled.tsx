import { colors } from '@/providers/theme';
import { Box, styled } from '@mui/material';

export const FormWrapper = styled(Box)(({}) => ({
	padding: 8,
	boxSizing: 'border-box',
	display: 'flex',
	justifyContent: 'center',
}));

export const FormView = styled(Box)(({ theme }) => ({
	boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.25)',
	border: `${colors.white} 2px solid`,
	borderRadius: 5,
	padding: theme.spacing(2),
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(2),
	width: '100%',
	maxWidth: 800,
	minWidth: 500,
	maxHeight: 400,

	[theme.breakpoints.down('sm')]: {
		padding: theme.spacing(1.5),
		gap: theme.spacing(1.5),
	},
}));

export const FormButtonsContainer = styled(Box)(({}) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
}));
