import { createContext, FC, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GlobalStyles, PaletteMode } from '@mui/material';
import useLocalStorage from 'use-local-storage';
import { ContextProps } from './types';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeContext: FC<ContextProps> = ({ children }) => {
	const [mode, setMode] = useLocalStorage<PaletteMode>('colorMode', 'light');

	const toggleColorMode = () =>
		setMode((prevMode: PaletteMode | undefined) => (prevMode === 'light' ? 'dark' : 'light'));

	const { palette } = createTheme();

	const theme = useMemo(
		() =>
			createTheme({
				direction: 'rtl',
				palette: {
					mode,
					...(mode === 'light' ? lightTheme : darkTheme),
				},
				typography: {
					fontFamily: '"Rubik", sans-serif',
					fontWeightMedium: 600,
				},
				components: {
					MuiTab: {
						styleOverrides: {
							root: { color: 'black', border: '1px' },
						},
					},
					MuiTabs: {
						styleOverrides: {
							indicator: { display: 'none' },
							root: {
								'& .MuiTabs-flexContainer': { justifyContent: 'space-between' },
								width: '100%',
								'& div': { borderBottom: `1px solid ${palette.grey[300]}40` },
								'& button:not(:first-of-type)': { borderRight: `2px solid ${palette.grey[300]}c0` },
								"& button[aria-selected='true']": {
									borderBottom: '1px solid #00000040',
									borderRight: `2px solid ${palette.grey[300]}c0`,
									borderTopLeftRadius: '15px',
									color: 'black',
									margin: 0,
									borderTop: '3px solid lightgrey',
									borderLeft: '3px solid lightgrey',
								},
								"& button[aria-selected='true']:not(:last-child)": {
									borderLeft: '1px solid #00000040',
								},
								"& button[aria-selected='true'] + button": {
									borderRight: 0,
								},
								'& button': {
									marginTop: '5px',
									width: '100%',
									flex: 1,
									maxWidth: 'none !important',
									borderBottom: '3px solid lightgrey',
								},
								color: 'black',
								'& .Mui-selected': {
									color: 'black',
									backgroundColor: 'rgba(229, 93, 126, 0.3)',
								},
							},
						},
					},
				},
			}),
		[mode, palette.grey]
	);
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles
				styles={{
					'*::-webkit-scrollbar': {
						width: '0.5em',
					},
					'*::-webkit-scrollbar-thumb': {
						backgroundColor: theme.palette.secondary.main,
						borderRadius: '8px',
					},

					'*::-webkit-scrollbar-track': {
						backgroundColor: '#E7E7E7',
						borderRadius: '8px',
					},
				}}
			/>
			<ColorModeContext.Provider value={{ toggleColorMode }}>{children}</ColorModeContext.Provider>
		</ThemeProvider>
	);
};
