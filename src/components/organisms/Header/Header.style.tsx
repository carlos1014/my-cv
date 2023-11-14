import styled from "styled-components";



export const HeaderStyle = styled.header`
  padding: 0 16px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.header};
  top: 0;
  z-index: 999;
  position: fixed;
  width: 100%;

  @media screen and (max-width: 960px) {
    height: 70px;
    background-color: ${({ theme }) => theme.colors.header};
  }

`;

export const Container = styled.div`
  padding: 0 16px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1300px;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    height: 70px;
  }

`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 25px;
    right: 10px;
    cursor: pointer;
    z-index: 999;
    svg {
      fill: #fff;
      margin-right: 0.5rem;
    }
  }
`;
