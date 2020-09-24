import styled from '@emotion/styled';

const Container = styled.section`
  height: 100vh;
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
`;

export default Container;
