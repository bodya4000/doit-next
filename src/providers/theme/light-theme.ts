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
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					backgroundColor: '#ffffff',
					borderRadius: 12,
					boxShadow: '0px 3px 6px rgba(0,0,0,0.08)',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 8,
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					backgroundColor: '#fefefe',
				},
				notchedOutline: {
					borderColor: '#ccc',
				},
			},
		},
	},
});
