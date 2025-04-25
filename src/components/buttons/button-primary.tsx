import { colors } from '@/providers/theme';
import { Box, ButtonProps, Typography } from '@mui/material';
import { Icon, IconName, TouchableOpacity } from '..';

interface Props extends ButtonProps {
	icon?: IconName;
	iconAtLeft?: boolean;
}

const PrimaryButton = ({ icon, title, sx, iconAtLeft = true, ...rest }: Props) => {
	return (
		<TouchableOpacity {...rest}>
			<Box
				sx={{
					flex: 1,
					display: 'flex',
					alignItems: 'center',
					padding: 1,
					gap: 1,
					bgcolor: colors.blue,
					borderRadius: 1,
					...sx,
				}}
			>
				{icon && iconAtLeft && (
					<Icon
						sx={{ color: colors.white, fontSize: { xs: '6px', sm: '8px', md: '16px' } }}
						name={icon}
					/>
				)}
				<Typography color={colors.white} sx={{ fontSize: { xs: '6px', sm: '8px', md: '16px' } }}>
					{title}
				</Typography>

				{icon && !iconAtLeft && (
					<Icon
						sx={{ color: colors.white, fontSize: { xs: '6px', sm: '8px', md: '16px' } }}
						name={icon}
					/>
				)}
			</Box>
		</TouchableOpacity>
	);
};

export default PrimaryButton;
