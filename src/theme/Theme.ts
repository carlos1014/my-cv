

export interface ThemeProps {
  name: string;
  fonts: Fonts;
  colors: Colors;
}

export interface Fonts {
  Roboto: string,
}

export interface Colors {
    header: string,
    headerMobile: string,
    background: string,
    backgroundImage: string,
    footer: string,
    title: string,
    subtitle: string,
    text: string,
    quoteBgc: string,
    quoteTitle: string,
    quoteBody: string,
    quoteBorder: string,
    border: string,
}


export const lightTheme: ThemeProps = {
  name: "light-theme",
  fonts:{
    Roboto:'"Roboto Condensed", sans-serif',
  },
  colors: {
    header: "rgba(187, 215, 254, 0.95)",
    headerMobile: "rgba(187, 215, 254, 1)",
    backgroundImage: "url('../src/assets/images/bg_light.jpg')",
    background: "#C2DFFD",
    footer: "#ECF4FD",
    title: "#22394C",
    subtitle: "#446F95",
    text: "#22394C",
    quoteBgc: "hsl(60, 40%, 100%)",
    quoteTitle: "hsl(0, 1%, 38%)",
    quoteBody: "hsl(0, 1%, 38%);",
    quoteBorder: "hsl(0, 0%, 87%)",
    border: "hsl(0, 0%, 87%)",
  },
};

export const darkTheme = {
  name: "dark-theme",
  fonts:{
    Roboto:'"Roboto Condensed", sans-serif',
  },
  colors: {
    header: "rgba(1, 47, 88, 0.95)",
    headerMobile: "rgba(1, 47, 88, 1)",
    background: "#012C57",
    backgroundImage: "url('../src/assets/images/bg_dark.jpg')",
    footer: "#011C34",
    title: "#FFFFFF",
    subtitle: "#C4F0FF",
    text: "#fff",
    quoteBgc: "hsl(0, 0%, 35%)",
    quoteTitle: "hsl(0, 0%, 100%)",
    quoteBody: "hsl(0, 0%, 100%)",
    quoteBorder: "hsl(0, 0%, 59%)",
    border: "hsl(0, 0%, 78%)",
  },
};