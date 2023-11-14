import styled from 'styled-components';

type Menu = {
  open: boolean;
};

export const Container = styled.ul<Menu>`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media screen and (max-width: 960px) {
    background-color: ${({ theme }) => theme.colors.headerMobile};
    position: absolute;
    top: 0px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;