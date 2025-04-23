'use client';

import { Box, useTheme } from '@mui/material';
import { BaseContainer } from '../containers';

const Header = () => {
	const theme = useTheme();

	return (
		<Box component='header' sx={{ backgroundColor: theme.palette.primary.main }}>
			<BaseContainer>Hello</BaseContainer>
		</Box>
	);
};

export default Header;
