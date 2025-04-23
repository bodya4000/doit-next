import { createTheme } from '@mui/material/styles';
import { colors, typography } from '.';

export const lightTheme = createTheme({
	palette: {
		// mode: 'light',
		// primary: {},
		// secondary: {},
		background: {
			default: colors.white,
		},
		text: {
			primary: colors.dark,
			secondary: colors.black,
		}, // error: {},
	},
	...typography,
});
