import { Link } from "react-router-dom";
import styled from "styled-components";

export type MenuItemProps = {
  border?: boolean;
  borderColor?: string;
  className?: string;
};

export type LinksProps = {
  className?: string;
};

export const MenuItemButton = styled.li<MenuItemProps>`
  .isActive {
    background-color: rgba(255,255,255,0.3);
    transition: 0.5s all ease;
  }
  height: 100%;
  list-style: none;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled(Link)<LinksProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s all ease;
  text-transform: uppercase;

  &:hover {
    color: #fff;
    background-color: #e0792a;
    transition: 0.5s all ease;

    div {
      svg {
        fill: #23394d;
      }
    }
  }

  .active{
    background-color: red;
    color: #fff;
}

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: none;
      fill: #e0792a;
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 1200px) {
    font-size: 15px;
    padding: 0 15px;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    font-size: 25px;

    div {
      width: 30%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }
`;

export const SelectLang = styled.select`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s all ease;
  text-transform: uppercase;
  height: 40px;
  padding: 0 12px;
  margin: 30px 20px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid ${({ theme }) => theme.colors.text};
  option {
    background: ${({ theme }) => theme.colors.headerMobile};
    color: ${({ theme }) => theme.colors.text};
  }

  option:checked {
    background: ${({ theme }) => theme.colors.headerMobile};
    color: ${({ theme }) => theme.colors.text};
  }

  @media screen and (max-width: 1200px) {
    font-size: 15px;
    font-weight: 600;
    padding: 0 8px;
  }

  @media screen and (max-width: 960px) {
    font-size: 25px;
    font-weight: 600;
    padding: 0 15px;
    height:50px
  }
`;
