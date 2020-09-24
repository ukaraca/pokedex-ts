import styled from '@emotion/styled';

const Container = styled.div`
  margin-top: 2rem;
  .nes-container {
    width: 100%;
  }
  .move-screen {
    margin: 3px;
    padding: 10px 20px;
    flex: 1;
    height: 100%;
  }

  .move-controls {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 10px 0 7px;
  }
`;

export default Container;
