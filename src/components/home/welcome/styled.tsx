import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const OuterWrapper = styled(Box)({
	marginTop:20,
	display: 'flex',
	justifyContent: 'center',
});

export const GradientSection = styled(Box)(({ theme }) => ({
	display: 'inline-block',
	textAlign: 'left',
	background: 'linear-gradient(90deg, #e0f2ff 0%, #f5e6f7 100%)',
	padding: theme.spacing(2, 4),
	borderRadius: theme.spacing(2),
}));

export const CenteredContent = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: theme.spacing(2),
	marginTop: theme.spacing(1),
	marginBottom: theme.spacing(1),
}));

export const ButtonContainer = styled(Box)(({}) => ({
	display: 'flex',
	alignItems: 'center',
}));
