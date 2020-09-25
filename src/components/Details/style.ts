import styled from '@emotion/styled';

const Container = styled.section`
  min-height: 100vh;

  .nes-container {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
  }
  .title {
    text-transform: uppercase;
  }
  .inner-container {
    width: 100%;
    position: relative;
    display: flex;

    justify-content: space-between;
  }

  @media (max-width: 768px) {
    .nes-container {
      width: 100%;
    }
    .pokemon-list {
      top: -60px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 50px !important;
  }
`;

export default Container;
