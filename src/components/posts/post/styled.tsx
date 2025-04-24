import { Box, colors, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PostCard = styled(Box)(({ theme }) => ({
	flex: '0 0 100%',
	padding: 8,
	boxSizing: 'border-box',
	display: 'flex',
	justifyContent: 'center',

	[theme.breakpoints.up(650)]: {
		flex: '0 0 50%',
	},
	[theme.breakpoints.up(970)]: {
		flex: '0 0 33.33%',
		padding: 8,
	},
}));

export const PostWrapper = styled(Box)(({ theme }) => ({
	boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.25)',
	borderRadius: 5,
	padding: theme.spacing(2),
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(2),
	width: '100%',
	maxWidth: 400,

	[theme.breakpoints.down('sm')]: {
		padding: theme.spacing(1.5),
		gap: theme.spacing(1.5),
	},
}));

export const PostHeader = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	gap: theme.spacing(1.5),
}));

export const PostAvatar = styled(Box)(({ theme }) => ({
	width: 72,
	height: 72,
	borderRadius: '50%',
	backgroundColor: colors.grey[500],
	flexShrink: 0,

	[theme.breakpoints.down('sm')]: {
		width: 60,
		height: 60,
	},
}));

export const PostTitle = styled(Box)(({ theme }) => ({
	display: '-webkit-box',
	WebkitLineClamp: 2,
	WebkitBoxOrient: 'vertical',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	fontWeight: 600,
	fontSize: '1rem',
	lineHeight: 1.4,
	color: theme.palette.text.primary,

	[theme.breakpoints.down('sm')]: {
		fontSize: '0.95rem',
	},
}));

export const PostText = styled(Typography)(({ theme }) => ({
	fontSize: '0.875rem',
	lineHeight: 1.6,
	color: theme.palette.text.primary,
	[theme.breakpoints.down('sm')]: {
		fontSize: '0.8rem',
	},
}));
