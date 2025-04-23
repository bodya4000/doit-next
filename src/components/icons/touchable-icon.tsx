import { IconButton, SxProps, Theme } from '@mui/material';
import { Icon, IconName } from '.';

interface TouchableIconProps {
	sx?: SxProps<Theme>;
	name: IconName;
	onClick?: () => void;
	ariaLabel?: string;
}

const TouchableIcon = ({ sx, name, onClick, ariaLabel = 'open menu' }: TouchableIconProps) => {
	return (
		<IconButton aria-label={ariaLabel} onClick={onClick} sx={sx}>
			<Icon name={name} fontSize='medium' />
		</IconButton>
	);
};

export default TouchableIcon;
