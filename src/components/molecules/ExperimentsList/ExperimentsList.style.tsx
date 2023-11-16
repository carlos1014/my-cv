import styled from "styled-components";

export const ImageExperiment = styled.img`
  margin: 0 auto;
  display: table;
  border: 2px solid white;
  text-align: center;
  max-width: 300px;
  @media only screen and (max-width: 1024px) {
    max-width: 250px;
  }
`;

export const ContainerTextExperiments = styled.div`
  margin-left: 15px;
  @media only screen and (max-width: 1024px) {
    margin: 0px auto 0 auto;
  }
`;

export const TitleExperiments = styled.div`
  font-size: 26px;
  line-height: 26px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  color: ${({ theme }) => theme.colors.title};
  font-weight: 500;
  text-align: center;
  padding-bottom: 5px;
  margin: 15px auto 5px auto;
  max-width: 380px;

  @media only screen and (max-width: 1024px) {
    font-size: 20px;
    line-height: 20px;
    text-align: center;
  }
  @media only screen and (max-width: 650px) {
    font-size: 22px;
    line-height: 22px;
  }
`;

export const TextExperiments = styled.div`
  font-size: 18px;
  line-height: 20px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  color: ${({ theme }) => theme.colors.title};
  font-weight: 300;
  text-align: left;
  padding-bottom: 5px;
  margin: 0px auto;
  max-width: 320px;

  @media only screen and (max-width: 1024px) {
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    margin-top: 15px;
  }
  @media only screen and (max-width: 650px) {
    font-size: 16px;
    line-height: 16px;
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  max-width: 320px;
  margin: 20px auto;
  @media only screen and (max-width: 1024px) {
  }
  @media only screen and (max-width: 650px) {
  }
`;

export const LinkExperiment = styled.div`
  display: flex;
  align-content: center;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  svg {
    font-size: 23px;
    fill: ${({ theme }) => theme.colors.title};
  }

  @media only screen and (max-width: 1024px) {
  }
  @media only screen and (max-width: 650px) {
  }
`;

export const TextLinkExperiment = styled.div`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  color: ${({ theme }) => theme.colors.title};
  padding: 6px 5px;

  @media only screen and (max-width: 1024px) {
  }
  @media only screen and (max-width: 650px) {
  }
`;

export const ContainerCard = styled.div`
  border-bottom: 4px solid ${({ theme }) => theme.colors.title};
  background: ${({ theme }) => theme.colors.bgCard};
  padding-top: 20px;
  border-radius: 5px;
  margin-bottom: 30px;

  @media only screen and (max-width: 1024px) {
    max-width: 300px;
    display: table;
    margin: 0 auto;
    padding: 20px;
    margin-bottom: 60px;
  }
  @media only screen and (max-width: 650px) {
  }
`;
