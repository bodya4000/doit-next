import { colors } from '@/providers/theme';
import { Box, ButtonProps, Typography } from '@mui/material';
import { Icon, IconName, TouchableOpacity } from '..';

interface Props extends ButtonProps {
	icon?: IconName;
}

const PrimaryButton = ({ icon, title, sx, ...rest }: Props) => {
	return (
		<TouchableOpacity {...rest}>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					padding: 1,
					gap: 1,
					bgcolor: colors.blue,
					borderRadius: 1,
					...sx,
				}}
			>
				{icon && <Icon sx={{ color: colors.white, fontSize: '16px'}} name={icon} />}
				<Typography color={colors.white}>{title}</Typography>
			</Box>
		</TouchableOpacity>
	);
};

export default PrimaryButton;
