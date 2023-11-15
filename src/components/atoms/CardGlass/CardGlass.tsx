import { CSSProperties, ReactNode } from "react";
// Styles
import { Container } from "./CardGlass.style";

// Definitions
export type Props = {
  style?: CSSProperties;
  children?: ReactNode;
};

// Default values
const Defaults = {
  style: undefined,
  children: undefined,
};

const CardGlass = (props: Props) => {
  // Props
  const { children, style } = props;

  return <Container style={style}>{children}</Container>;
};

CardGlass.defaultProps = Defaults;

export default CardGlass;
