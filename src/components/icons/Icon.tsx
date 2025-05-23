import AddIcon from '@mui/icons-material/Add';
import ArrowRight from '@mui/icons-material/ArrowForward';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import ChatIcon from '@mui/icons-material/Chat';
import Delete from '@mui/icons-material/Delete';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Home from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import SaveIcon from '@mui/icons-material/Save';

import { SvgIconProps } from '@mui/material';
import { JSX } from 'react';

export type IconName =
	| 'menu'
	| 'settings'
	| 'theme'
	| 'home'
	| 'list'
	| 'plus'
	| 'delete'
	| 'arrow-right'
	| 'search'
	| 'chat'
	| 'save';

const iconMap: Record<IconName, (props: SvgIconProps) => JSX.Element> = {
	menu: props => <MenuIcon {...props} />,
	settings: props => <SettingsIcon {...props} />,
	theme: props => <Brightness4Icon {...props} />,
	home: props => <Home {...props} />,
	list: props => <FormatListBulletedIcon {...props} />,
	plus: props => <AddIcon {...props} />,
	delete: props => <Delete {...props} />,
	search: props => <SearchIcon {...props} />,
	chat: props => <ChatIcon {...props} />,
	save: props => <SaveIcon {...props} />,
	'arrow-right': props => <ArrowRight {...props} />,
};

export const Icon = ({ name, ...props }: { name: IconName } & SvgIconProps) => {
	return iconMap[name](props);
};
