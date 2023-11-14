import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/theme/Global";
import ThemeContext from "@/contexts/ThemeContext";
import { lightTheme, darkTheme } from "@/theme/Theme";
import useThemeMode from "@/hooks/useThemeMode";
import { ScreenClassProvider } from "react-grid-system";
import Header from "@/components/organisms/Header/Header";
import { About } from "@/components/pages/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experience from "@/components/pages/experience/Experience";
import Footer from "@/components/organisms/Footer/Footer";
import { Education, Experiments } from "./components/pages";


function App() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <BrowserRouter>
          <ThemeContext>
            <ThemeProvider theme={themeMode}>
              <GlobalStyle />
              <ScreenClassProvider>
                <Header themeToggler={themeToggler}/>
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/experiments" element={<Experiments />} />
                </Routes>
                <Footer />
              </ScreenClassProvider>
            </ThemeProvider>
          </ThemeContext>
      </BrowserRouter>
    </>
  );
}

export default App;
