'use client';

import { Box, useTheme } from '@mui/material';
import { BaseContainer } from '../containers';
import { TouchableIcon } from '../icons';

const Header = () => {
	const theme = useTheme();

	return (
		<header>
			<Box sx={{ backgroundColor: theme.palette.primary.main }}>
				<BaseContainer
					sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}
				>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
						<TouchableIcon name='menu' sx={{ color: theme.palette.grey[100] }} />
						<Box component='span' sx={{ fontWeight: 'bold', color: theme.palette.grey[100] }}>
							DOiT MVP
						</Box>
					</Box>

					<TouchableIcon name='theme' sx={{ color: theme.palette.grey[100] }} />
				</BaseContainer>
			</Box>
		</header>
	);
};

export default Header;
