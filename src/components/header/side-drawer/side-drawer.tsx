import { Box, Drawer } from '@mui/material';
import DrawerItem from './drawer-item';

interface SideDrawerProps {
	open: boolean;
	onClose: () => void;
}

const SideDrawer = ({ open, onClose }: SideDrawerProps) => (
	<aside>
		<Drawer anchor='left' open={open} onClose={onClose}>
			<Box
				sx={{ width: 250, display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}
				role='presentation'
				onClick={onClose}
				onKeyDown={onClose}
			>
				<DrawerItem icon='home' title='Головна' />
				<DrawerItem icon='home' title='Головна' />
				<DrawerItem icon='home' title='Головна' />
				<DrawerItem icon='home' title='Головна' />
				<DrawerItem icon='home' title='Головна' />
			</Box>
		</Drawer>
	</aside>
);

export default SideDrawer;
