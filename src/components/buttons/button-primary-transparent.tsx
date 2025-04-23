import { colors } from '@/providers/theme';
import { Box, ButtonProps, Typography } from '@mui/material';
import { Icon, IconName, TouchableOpacity } from '..';

interface Props extends ButtonProps {
	icon?: IconName;
}

const PrimaryTransparentButton = ({ icon, title, sx, ...rest }: Props) => {
	return (
		<TouchableOpacity {...rest}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					padding: 1,
					gap: 1,
					bgcolor: 'transparent',
					border: `1px solid ${colors.blue}`,
					borderRadius: 1,
					...sx,
				}}
			>
				{icon && <Icon sx={{ color: colors.blue }} name={icon} />}
				<Typography color={colors.blue}>{title}</Typography>
			</Box>
		</TouchableOpacity>
	);
};

export default PrimaryTransparentButton;
