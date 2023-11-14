import styled from "styled-components";

export const Icon = styled.img`
  height: 50px;
  width: 50px;
`;

export const TitleIcon = styled.div`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const ContainerIcon = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
`;

export const ContainerListIcon = styled.div`
  display: flex;
`;
