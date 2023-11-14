import styled from 'styled-components';

export const Container = styled.div`
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.20);
  border-radius: 30px;
  border: 0px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);

  @media screen and (max-width: 960px) {
      padding: 15px;
  }
`;