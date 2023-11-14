import styled, { css } from 'styled-components';

export type ContainerProps = {
  border?: boolean;
  borderColor?: string;
};

export const Container = styled.div<ContainerProps>`
  padding: 1rem;
  background-color: white;
  border-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  opacity: 1;
  font-family: ${props => props.theme.font.regular};
  ${props => {
    const { border, borderColor } = props;
    if (border) {
      return css`
        border: 1px solid ${props => props.theme.palette.secondary.neutral};
        border-color: ${borderColor};
      `;
    }
    return null;
  }}
`;
