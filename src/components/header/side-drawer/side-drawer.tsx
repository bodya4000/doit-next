'use client';

import { Box, Drawer } from '@mui/material';
import { useRouter } from 'next/navigation';
import DrawerItem from './drawer-item';

interface SideDrawerProps {
	open: boolean;
	onClose: () => void;
}

const SideDrawer = ({ open, onClose }: SideDrawerProps) => {
	const router = useRouter();
	const onHomeClick = () => {
		router.push('/');
	};

	const onPostsClick = () => {
		router.push('/posts');
	};
	return (
		<aside>
			<Drawer anchor='left' open={open} onClose={onClose}>
				<Box
					sx={{ width: 250, display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}
					role='presentation'
					onClick={onClose}
					onKeyDown={onClose}
				>
					<DrawerItem onClick={onHomeClick} icon='home' title='Головна' />
					<DrawerItem onClick={onPostsClick} icon='list' title='Усі Пости' />
				</Box>
			</Drawer>
		</aside>
	);
};

export default SideDrawer;
