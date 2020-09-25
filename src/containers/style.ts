import styled from '@emotion/styled';

const Container = styled.main`
  position: relative;
  .title {
    background-color: unset !important;
  }

  .flex {
    height: 100%;
  }

  article {
    height: 250px;
    width: 250px;
    background-color: #fff;
  }

  @media (max-width: 768px) {
    padding-top: 85px !important;
  }
`;

export default Container;
