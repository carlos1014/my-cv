import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from '@/theme/Theme';

type GlobalThemeProps = {
    theme: ThemeProps;
  };

  const globalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body  {
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.background};
    background-image: ${({ theme }) => theme.colors.backgroundImage};
  }

  h1 {
    color: ${({ theme }: GlobalThemeProps) => theme.colors.title};
  }

  h2 {
    color: ${({ theme }: GlobalThemeProps) => theme.colors.subtitle};
  }


`;

export default withTheme(globalStyle);