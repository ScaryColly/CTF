declare module '@mui/material/styles' {
	// eslint-disable-next-line
	interface PaletteOptions extends ThemePalette {}

	// eslint-disable-next-line
	interface Palette extends ThemePalette {}
}

export interface ThemePalette {
	primary: {
		main: string;
		light: string;
		dark: string;
		contrastText: string;
	};
	secondary: {
		main: string;
		contrastText: string;
	};
	text: {
		primary: string;
		secondary: string;
	};
	info: {
		main: string;
		light: string;
	};
	tableBackground: {
		main: string;
		dark: string;
		light: string;
	};
	background: {
		default: string;
	};
}
export interface ContextProps {
	children: JSX.Element[] | JSX.Element;
}
