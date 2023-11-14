import { Container, HeaderStyle, MobileIcon } from "./Header.style";
import Logo from "@/components/atoms/Logo/Logo";
import Menu from "@/components/molecules/Menu";
import { Switch } from "@/components/atoms/Switch";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import { lightTheme, darkTheme } from "@/theme/Theme";

// Definitions
export type Props = {
  themeToggler: () => void;
  onSetShowMobileMenu: (showMobileMenu: boolean) => void;
  isDark: boolean;
  colorLight: string;
  colorDark: string;
};

const Defaults = {
  themeToggler: undefined,
  langToggler: undefined,
  onSetShowMobileMenu: undefined,
  isDark: undefined,
  colorLight: darkTheme.colors.title,
  colorDark: lightTheme.colors.title,
};

const Header = (props: Props) => {
  const { themeToggler, onSetShowMobileMenu, colorDark, colorLight } = props;
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const isDark = window.localStorage.getItem("theme") === "light";
  return (
    <>
      <HeaderStyle>
        <Container>
          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? (
              <FaTimes
                style={{
                  fill: isDark ? colorDark : colorLight,
                }}
              />
            ) : (
              <FaBars
                style={{
                  fill: isDark ? colorDark : colorLight,
                }}
              />
            )}
          </MobileIcon>
          <Logo />
          <Menu
            showMobileMenu={showMobileMenu}
            onSetShowMobileMenu={onSetShowMobileMenu}
          />
          <Switch themeToggler={themeToggler} />
        </Container>
      </HeaderStyle>
    </>
  );
};

Header.defaultProps = Defaults;

export default Header;
