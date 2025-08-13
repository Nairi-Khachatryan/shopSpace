import { ThemeContext } from '../contexts/themeContext/ThemeContext';
import { useContext } from 'react';

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
