import styled from '@emotion/styled';

const Container = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 75px;
    top: 60px;
  }
`;

export default Container;
