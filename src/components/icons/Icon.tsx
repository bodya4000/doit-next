import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { SvgIconProps } from '@mui/material';
import { JSX } from 'react';

export type IconName = 'menu' | 'settings' | 'theme';

const iconMap: Record<IconName, (props: SvgIconProps) => JSX.Element> = {
	menu: props => <MenuIcon {...props} />,
	settings: props => <SettingsIcon {...props} />,
	theme: props => <Brightness4Icon {...props} />,
};

export const Icon = ({ name, ...props }: { name: IconName } & SvgIconProps) => {
	return iconMap[name](props);
};
