import {
  MenuItemButton,
  MenuItemLink,
  SelectLang
} from "@/components/atoms/MenuItem/MenuItem.style";
import { Container } from "./Menu.style";
import { LANGUAGES } from "@/data/language";
import { useTranslation } from "react-i18next";

// Definitions
export type Props = {
  showMobileMenu: boolean;
  onSetShowMobileMenu: (showMobileMenu: boolean) => void;
};

const Menu = (props: Props) => {
  const { showMobileMenu, onSetShowMobileMenu } = props;
  const { i18n, t } = useTranslation();
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    window.localStorage.setItem('language', lang_code);
    i18n.changeLanguage(lang_code);
  };
  
  
  return (
    <Container open={showMobileMenu}>
      <MenuItemButton>
        <MenuItemLink
          onClick={() => onSetShowMobileMenu(!showMobileMenu)}
          className={location.pathname === "/" ? "isActive" :""}
          to="/"
        >
          {t("menu.about")}
        </MenuItemLink>
      </MenuItemButton>
      <MenuItemButton>
        <MenuItemLink
          onClick={() => onSetShowMobileMenu(!showMobileMenu)}
          className={location.pathname === "/experience" ? "isActive" :""}
          to="/experience"
        >
          {t("menu.experience")}
        </MenuItemLink>
      </MenuItemButton>
      <MenuItemButton>
        <MenuItemLink
          onClick={() => onSetShowMobileMenu(!showMobileMenu)}
          className={location.pathname === "/education" ? "isActive" :""}
          to="/education"
        >
          {t("menu.education")}
        </MenuItemLink>
      </MenuItemButton>
      <MenuItemButton>
        <MenuItemLink
          onClick={() => onSetShowMobileMenu(!showMobileMenu)}
          className={location.pathname === "/experiments" ? "isActive" :""}
          to="/experiments"
        >
          {t("menu.experiment")}
        </MenuItemLink>
      </MenuItemButton>
      <SelectLang defaultValue={i18n.language} onChange={onChangeLang}>
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </SelectLang>
    </Container>
  );
};

export default Menu;
