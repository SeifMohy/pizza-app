import { Palette, PaletteOptions, Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    status: {
        grey: {
            main: string;
        }
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    status?: {
        grey?: {
            main?: string;
        }
    };
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}