import { Theme } from '@/enums';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const OuterWrapper = styled(Box)({
	display: 'flex',
	justifyContent: 'center',
});

interface GradientSectionProps {
	mode?: Theme;
}

export const GradientSection = styled(Box, {
	shouldForwardProp: prop => prop !== 'mode',
})<GradientSectionProps>(({ theme, mode }) => ({
	display: 'inline-block',
	padding: theme.spacing(1, 2),
	borderRadius: 10,
	background:
		mode === Theme.DARK
			? 'linear-gradient(90deg, #1c2a39 0%, #431a9e 100%)'
			: 'linear-gradient(180deg, #e0f2ff 0%, #f5e6f7 100%)',
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
