'use client';

import { useAppSelector } from '@/hooks';
import { closeDrawer, openDrawer } from '@/store/navigation-slice';
import { Box, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';
import { SideDrawer } from '.';
import { BaseContainer } from '../containers';
import { TouchableIcon } from '../icons';

const Header = () => {
	const dispatch = useDispatch();
	const isDrawerOpened = useAppSelector(state => state.navigation.isDrawerOpened);
	const theme = useTheme();

	const onDrawerClose = () => {
		dispatch(closeDrawer());
	};

	const onDrawerOpen = () => {
		dispatch(openDrawer());
	};
	return (
		<header>
			<Box sx={{ backgroundColor: theme.palette.primary.main }}>
				<BaseContainer
					sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}
				>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
						<TouchableIcon
							onClick={onDrawerOpen}
							name='menu'
							sx={{ color: theme.palette.grey[100] }}
						/>
						<Box component='span' sx={{ fontWeight: 'bold', color: theme.palette.grey[100] }}>
							DOiT MVP
						</Box>
					</Box>

					<TouchableIcon name='theme' sx={{ color: theme.palette.grey[100] }} />
				</BaseContainer>
			</Box>

			<SideDrawer open={isDrawerOpened} onClose={onDrawerClose} />
		</header>
	);
};

export default Header;
