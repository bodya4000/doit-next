'use client';

import { Theme as AppTheme } from '@/enums';
import { ThemeProvider } from '@mui/material';
import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { darkTheme, lightTheme } from '.';

type ThemeContextType = {
	mode: AppTheme;
	setMode: (mode: AppTheme) => void;
};

const ThemeModeContext = createContext<ThemeContextType | undefined>(undefined);

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
	const [mode, setModeState] = useState<AppTheme>(AppTheme.LIGHT);

	useEffect(() => {
		try {
			const saved = localStorage.getItem('theme');
			if (saved === AppTheme.DARK || saved === AppTheme.LIGHT) {
				setModeState(saved as AppTheme);
			}
		} catch {}
	}, []);

	const setMode = (newMode: AppTheme) => {
		setModeState(newMode);
		localStorage.setItem('theme', newMode);
	};

	const theme = useMemo(() => (mode === AppTheme.LIGHT ? lightTheme : darkTheme), [mode]);

	return (
		<ThemeModeContext.Provider value={{ mode, setMode }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeModeContext.Provider>
	);
};

export const useThemeMode = () => {
	const context = useContext(ThemeModeContext);
	if (!context) throw new Error('useThemeMode must be used inside AppThemeProvider');
	return context;
};
