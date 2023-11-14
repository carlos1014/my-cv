import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 420px;
  @media only screen and (max-width: 1024px) {
    margin-left: 0;
    height: 300px;
  }
`;

export const LogoCompany = styled.img`
  height: 120px;
  width: 120px;

  @media only screen and (max-width: 1024px) {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top:15px;
    height: 100px;
    width: 100px;
  }
`;

export const ContainerText = styled.div`
  margin-left: 15px;
  @media only screen and (max-width: 1024px) {
    margin: 0px auto 0 auto;
  }
`;

export const Title = styled.div`
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

export const SubTitle = styled.div`
  font-size: 28px;
  line-height: 28px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  color: ${({ theme }) => theme.colors.subtitle};
  font-weight: 600;

  @media only screen and (max-width: 1024px) {
    font-size: 23px;
    line-height: 23px;
    text-align: center;
  }

  @media only screen and (max-width: 650px) {
    font-size: 18px;
    line-height: 18px;
    margin-top: 3px;
  }
`;

export const Date = styled.div`
  font-size: 25px;
  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};

  @media only screen and (max-width: 1024px) {
    font-size: 23px;
    line-height: 23px;
    text-align: center;
  }

  @media only screen and (max-width: 650px) {
    font-size: 18px;
    line-height: 20px;
    margin-top: 7px;
  }
`;

export const Duration = styled.div`
  font-size: 19px;
  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};

  @media only screen and (max-width: 1024px) {
    font-size: 18px;
    line-height: 18px;
    text-align: center;
  }

  @media only screen and (max-width: 650px) {
    font-size: 16px;
    line-height: 18px;
    margin-top: 3px;
  }
`;


export const Text = styled.p`
  font-size: 17px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 10px;
  padding: 0 0 0 25px;

  ul{
    padding: 20px 0;
  }

  li{
    padding-bottom: 10px;
    line-height: 20px;
  }

  span{
    font-weight: 700;
    color: ${({ theme }) => theme.colors.subtitle};
    font-size:20px ;
  }
`;
