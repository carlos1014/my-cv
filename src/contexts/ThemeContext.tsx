import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { useThemeMode } from '@/hooks/useThemeMode';
import { lightTheme, darkTheme } from '@/theme/Theme';

export type Props = {
    children?: ReactNode;
  };

// Default values
const Defaults = {
    children: undefined,
  };  


const ThemeContext: React.FC = (props: Props ) => {
  const { theme } = useThemeMode();

  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  return <ThemeProvider theme={themeMode}>{props.children}</ThemeProvider>;
};

ThemeContext.defaultProps = Defaults;

export default ThemeContext;