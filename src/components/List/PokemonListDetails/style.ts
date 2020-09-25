import styled from '@emotion/styled';

const Container = styled.div`
  min-height: 100vh;

  .nes-container {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    .nes-container {
      width: 80%;
    }
  }
`;

export default Container;
