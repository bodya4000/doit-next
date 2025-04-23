import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#2196f3',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#e91e63',
		},
		background: {
			default: '#f5f7fa',
			paper: '#ffffff',
		},
		text: {
			primary: '#1e1e1e',
			secondary: '#4f4f4f',
		},
		error: {
			main: '#f44336',
		},
	},
	typography: {
		fontFamily: '"Manrope", "Roboto", "Helvetica", "Arial", sans-serif',
		button: {
			textTransform: 'none',
			fontWeight: 600,
		},
	},
});
