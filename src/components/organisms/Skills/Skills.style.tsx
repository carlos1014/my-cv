import styled from 'styled-components';

export const PhotoMe = styled.img`
  height: 300px;
  width: 300px;
  position: absolute;
  top: -60px;
  left: -60px;
`;

export const ContainerText = styled.div`
  margin-left: 240px;
`;

export const Title = styled.h1`
  font-size: 45px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: 400;
`;

export const SubTitle = styled.h2`
  font-size: 35px;
  line-height: 25px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: 600;
`;

export const TitleSkills = styled.div`
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: 400;
  text-align: left;
  margin-bottom: 30px;
  margin-left: 15px;
  color: ${({ theme }) => theme.colors.text};
`;

