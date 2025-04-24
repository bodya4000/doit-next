import { colors as appColors } from '@/providers/theme/colors';
import { Box, colors, Grid, Skeleton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface PostWrapperProps {
	detail?: string;
}

export const PostCard = styled(Grid)(({}) => ({
	padding: 8,
	boxSizing: 'border-box',
	display: 'flex',
	justifyContent: 'center',
}));

export const PostWrapper = styled(Box)<PostWrapperProps>(({ theme, detail }) => ({
	boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.25)',
	borderRadius: 5,
	padding: theme.spacing(2),
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(2),
	width: '100%',
	maxWidth: detail ? '100%' : 400,
	minHeight: detail ? '100%' : 200,
	minWidth: detail ? '100%' : 400,
	maxHeight: detail ? '100%' : 300,

	[theme.breakpoints.down('sm')]: {
		padding: theme.spacing(1.5),
		gap: theme.spacing(1.5),
	},
}));

export const PostHeader = styled(Box)<PostWrapperProps>(({ theme, detail }) => ({
	display: 'flex',
	justifyContent: detail ? 'flex-start' : 'space-between',
	alignItems: 'center',
	gap: theme.spacing(1.5),
}));

export const PostAvatar = styled(Box)(({ theme }) => ({
	width: 72,
	height: 72,
	borderRadius: '50%',
	backgroundColor: colors.grey[500],
	flexShrink: 0,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	color: appColors.white,
	fontSize: 22,

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
	flex: 1,
	fontSize: '0.875rem',
	lineHeight: 1.6,
	color: theme.palette.text.primary,
	[theme.breakpoints.down('sm')]: {
		fontSize: '0.8rem',
	},
}));

export const SkeletonAvatar = styled(Skeleton)(({ theme }) => ({
	width: 72,
	height: 72,
	borderRadius: '50%',
	flexShrink: 0,
	[theme.breakpoints.down('sm')]: {
		width: 60,
		height: 60,
	},
}));

export const SkeletonLine = styled(Skeleton)(({ theme }) => ({
	height: 16,
	borderRadius: theme.spacing(1),
	width: '100%',
}));
