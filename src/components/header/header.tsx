'use client';

import { Theme } from '@/enums';
import { useAppSelector } from '@/hooks';
import { useThemeMode } from '@/providers';
import { colors } from '@/providers/theme';
import { closeDrawer, openDrawer } from '@/store/drawer-slice';
import { Box, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';
import { CommentButton, SideDrawer } from '.';
import { BaseContainer } from '../containers';
import { TouchableIcon } from '../icons';

interface Props {
	title?: string;
	comments?: boolean;
}

const Header = ({ title, comments }: Props) => {
	const dispatch = useDispatch();
	const isDrawerOpened = useAppSelector(state => state.drawer.isDrawerOpened);
	const theme = useTheme();
	const { mode, setMode } = useThemeMode();

	const onDrawerClose = () => {
		dispatch(closeDrawer());
	};

	const onDrawerOpen = () => {
		dispatch(openDrawer());
	};

	const toggleTheme = () => {
		setMode(mode === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
	};
	return (
		<header>
			<Box sx={{ backgroundColor: colors.blue }}>
				<BaseContainer
					sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}
				>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
						<TouchableIcon onClick={onDrawerOpen} name='menu' sx={{ color: colors.white }} />
						<Box component='span' sx={{ fontWeight: 'bold', color: colors.white }}>
							{title ? title : 'DOiT MVP'}
						</Box>
					</Box>

					<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
						<TouchableIcon
							onClick={toggleTheme}
							name='theme'
							sx={{ color: theme.palette.grey[100] }}
						/>

						{comments && <CommentButton />}
					</Box>
				</BaseContainer>
			</Box>

			<SideDrawer open={isDrawerOpened} onClose={onDrawerClose} />
		</header>
	);
};

export default Header;
