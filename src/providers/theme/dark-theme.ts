import { createTheme } from '@mui/material';
import { colors } from './colors';

export const darkTheme = createTheme({
	palette: {
		// mode: 'dark',
		// primary: {},
		// secondary: {},
		background: {
			default: colors.black,
			paper: colors.dark,
		}, 
		text: {
			primary: colors.white,
			secondary: colors.white
		},
		// error: {},
	},
	typography: {},
});
