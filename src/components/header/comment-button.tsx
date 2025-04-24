import { useAppSelector } from '@/hooks';
import { openCommentsModal } from '@/store/comments-slice';
import { Badge, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Icon, TouchableOpacity } from '..';

const CommentButton = () => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const numberOfComments = useAppSelector(state => state.comments.comments)?.length || 0;

	const onClick = () => {
		dispatch(openCommentsModal());
	};

	return (
		<TouchableOpacity disabled={numberOfComments <= 0} onClick={onClick}>
			<Badge
				badgeContent={numberOfComments}
				color='error'
				overlap='circular'
				sx={{
					'& .MuiBadge-badge': {
						fontSize: '0.7rem',
						height: 18,
						minWidth: 18,
						borderRadius: '50%',
						backgroundColor: '#8B4513',
						color: '#fff',
						boxShadow: `0 0 4px ${theme.palette.background.paper}`,
					},
				}}
			>
				<Icon name='chat' sx={{ color: theme.palette.grey[100], fontSize: 28 }} />
			</Badge>
		</TouchableOpacity>
	);
};

export default CommentButton;
