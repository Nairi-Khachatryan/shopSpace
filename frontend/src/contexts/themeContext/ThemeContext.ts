import { createContext } from 'react';

export type Theme = 'light' | 'dark';

export type ThemeContextType = {
  theme: Theme;
  handleChangeTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
