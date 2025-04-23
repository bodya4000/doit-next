import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

export const lightTheme = createTheme({
	palette: {
		// mode: 'light',
		// primary: {},
		// secondary: {},
		background: {
			default: colors.white,
		},
		text: {
			primary: colors.black,
			secondary: colors.black,
		}, // error: {},
	},
	typography: {},
});
