'use client';

import { ThemeProvider } from '@mui/material';
import { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { darkTheme, lightTheme } from '.';

type ThemeContextType = {
	mode: 'light' | 'dark';
	setMode: (mode: 'light' | 'dark') => void;
};

const ThemeModeContext = createContext<ThemeContextType | undefined>(undefined);

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
	const [mode, setMode] = useState<'light' | 'dark'>('light');

	const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

	return (
		<ThemeModeContext.Provider value={{ mode, setMode }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeModeContext.Provider>
	);
};

export const useThemeMode = () => {
	const context = useContext(ThemeModeContext);
	return context;
};
