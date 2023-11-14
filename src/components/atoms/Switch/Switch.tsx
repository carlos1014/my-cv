import { FaMoon, FaSun } from "react-icons/fa";
import { MoonIcon, SunIcon, SwitchStyle } from "./Switch.style";
import { lightTheme, darkTheme } from "@/theme/Theme";

// Definitions
export type Props = {
  themeToggler: () => void;
  isDark: boolean;
  colorLight: string;
  colorDark: string;
};

const Defaults = {
  isDark: undefined,
  colorLight: darkTheme.colors.title,
  colorDark: lightTheme.colors.title,
  onChange: undefined,
  light: undefined,
};

const Switch = (props: Props) => {
  // Props
  const isDark = window.localStorage.getItem("theme") === "light";
  const { themeToggler, colorLight, colorDark } = props;

  return (
    <SwitchStyle>
      <MoonIcon><FaMoon style={{fill: isDark ? colorDark : colorLight}} /></MoonIcon>
      <input
        className="switch-checkbox"
        id={`switch`}
        type="checkbox"
        onClick={themeToggler}
        onChange={() => false}
        checked={window.localStorage.getItem("theme") === "light"}
      />
      <label
        className="switch-label"
        htmlFor={`switch`}
      >
        <span className={`switch-button`} />
      </label>
      <SunIcon><FaSun style={{fill: isDark ? colorDark : colorLight}}/></SunIcon>
    </SwitchStyle>
  );
};

Switch.defaultProps = Defaults;

export default Switch;
