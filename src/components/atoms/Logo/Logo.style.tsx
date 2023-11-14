import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding: 15px 0;

  .imgLogo {
    width: 300px;
  }

  @media screen and (max-width: 1200px) {
    .imgLogo {
      width: 230px;
      margin-top: 10px;
    }
  }


  @media screen and (max-width: 960px) {
    .imgLogo {
      width: 180px;
      position: absolute;
      z-index: 999;
      left: 0px;
      top:5px
    }
  }
`;
