import { Icon, IconName, TouchableOpacity } from '@/components';
import { Box } from '@mui/material';

interface Props {
	icon: IconName;
	title: string;
	onClick?: () => void;
}

const DrawerItem = ({ icon, title, onClick }: Props) => {
	return (
		<TouchableOpacity onClick={onClick} sx={{ width: '100%', display: 'block'}}>
			<Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 2 }}>
				<Icon name={icon} />
				<p>{title}</p>
			</Box>
		</TouchableOpacity>
	);
};

export default DrawerItem;
