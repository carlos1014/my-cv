import styled from "styled-components";

export const ContainerExperiments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 420px;
  @media only screen and (max-width: 1024px) {
    margin-left: 0;
    height: 300px;
  }
`;

export const ContainerTextExperiments = styled.div`
  margin-left: 15px;
  @media only screen and (max-width: 1024px) {
    margin: 0px auto 0 auto;
  }
`;

export const TitleExperiments = styled.div`
  font-size: 35px;
  line-height: 35px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  color: ${({ theme }) => theme.colors.title};
  font-weight: 600;
  text-align: center;


  @media only screen and (max-width: 1024px) {
    font-size: 30px;
    line-height: 30px;
    text-align: center;
    margin-top: 15px;
  }
  @media only screen and (max-width: 650px) {
    font-size: 22px;
    line-height: 22px;
  }
`;
