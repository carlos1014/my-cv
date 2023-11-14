import styled from "styled-components";

export const PhotoMe = styled.img`
  height: 230px;
  width: 230px;
  position: absolute;
  top: -60px;
  left: -60px;

  @media only screen and (max-width: 1024px) {
    position: relative;
    margin: 0 auto;
    left: 0;
    height: 250px;
    width: 250px;
  }
`;

export const ContainerText = styled.div`
  margin-left: 170px;
  @media only screen and (max-width: 1024px) {
    margin-left: 0;
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: 400;

  @media only screen and (max-width: 650px) {
    font-size: 30px;
    line-height: 30px;
  }

`;

export const SubTitle = styled.h2`
  font-size: 35px;
  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: 600;

  @media only screen and (max-width: 650px) {
    font-size: 25px;
    line-height: 25px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 20px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 20px;
`;
