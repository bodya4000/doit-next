import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ModalContainer = styled(Container)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(2),

	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',

	width: 800,
	backgroundColor: theme.palette.background.paper,
	borderRadius: theme.shape.borderRadius,
	boxShadow: theme.shadows[5],
	padding: theme.spacing(4),
}));

export const ModalHeader = styled(Box)(({}) => ({
	py: 20,
	px: 10,
}));

export const ModalBody = styled(Box)(({}) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: 20,
	py: 20,
}));
