import { CSSProperties, ReactNode } from "react";

// Styles
import { MenuItemButton } from "./MenuItem.style";

// Definitions
export type Props = {
  onClick?: () => void;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string
};

// Default values
const Defaults = {
  onClick: undefined,
  children: undefined,
  className:undefined,
};

const MenuItem = (props: Props) => {
  // Props
  const { onClick, children, style, className } = props;
  return (
    <MenuItemButton onClick={onClick} style={style} className={className}>
      {children}
    </MenuItemButton>
  );
};

MenuItem.defaultProps = Defaults;

export default MenuItem;
