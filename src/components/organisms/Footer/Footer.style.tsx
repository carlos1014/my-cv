import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 100%;
  margin-top: 80px;
  padding: 20px 0;
  background: ${({ theme }) => theme.colors.footer};

`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 15px auto 0px auto;
  padding: 10px 30px;
  max-width: 600px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.header};
  border-top: 2px solid ${({ theme }) => theme.colors.header};
`;

export const ContainerLogo = styled.div`
  margin: 0 auto;
  display: table;
  img {
    opacity: 0.7;
    width: 250px;
    cursor: pointer;
  }
  img:hover{
    opacity: 1;
    transition: 0.5s all ease;
  }
`;

export const WhatsappStyle = styled.div`
  svg {
    font-size: 40px;
    cursor: pointer;
    opacity: 0.7;
  }
  svg:hover{
    opacity: 1;
    transition: 0.5s all ease;
  }
`;

export const MailStyle = styled.div`
  svg {
    font-size: 40px;
    cursor: pointer;
    opacity: 0.7;
  }
  svg:hover{
    opacity: 1;
    transition: 0.5s all ease;
  }  
`;

export const InStyle = styled.div`
  svg {
    font-size: 40px;
    cursor: pointer;
    opacity: 0.7;
  }
  svg:hover{
    opacity: 1;
    transition: 0.5s all ease;
  }
`;
