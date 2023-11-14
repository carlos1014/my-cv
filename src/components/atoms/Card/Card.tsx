import { CSSProperties, ReactNode, forwardRef } from 'react';

// Styles
import { Container } from './Card.style';

// Definitions
export type Props = {
  onClick?: () => void;
  children?: ReactNode;
  border?: boolean;
  testId?: string;
  style?: CSSProperties;
  borderColor?: string;
};

// Default values
const Defaults = {
  onClick: undefined,
  children: undefined,
  border: false,
  testId: undefined,
};

const Card = forwardRef((props: Props, ref) => {
  // Props
  const { onClick, border, testId, children, style, borderColor } = props;

  return (
    <Container
      onClick={onClick}
      border={border}
      borderColor={borderColor}
      data-test-id={testId}
      style={style}>
      {children}
    </Container>
  );
});

Card.defaultProps = Defaults;

export default Card;
