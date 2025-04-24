import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const OuterWrapper = styled(Box)({
	display: 'flex',
	justifyContent: 'center',
});

export const GradientSection = styled(Box)(({ theme }) => ({
	display: 'inline-block',
	background: 'linear-gradient(180deg, #e0f2ff 0%, #f5e6f7 100%)',
	padding: theme.spacing(1, 2),
}));

export const CenteredContent = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: theme.spacing(1),
	marginBottom: 20,
}));

export const ButtonContainer = styled(Box)(({}) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: '0 20px',
	gap: 1,
}));
