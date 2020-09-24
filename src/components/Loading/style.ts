import styled from '@emotion/styled';

interface LoadingProps {
  background?: boolean;
}

const Container = styled.div<LoadingProps>`
  position: relative;
  width: 100%;
  height: 100%;
  .pokeball {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100px;
    width: 100px;
    background: #ef4036;
    border-radius: 50% 50%;
    overflow: hidden;
    padding: 0px;
    border: 2.5px solid #666;
  }
  .glow {
    top: 4.5px;
    left: 13px;
    background: white;
    height: 32.5px;
    width: 20px;
    border-radius: 50%;
    -webkit-transform: rotate(52deg);
    transform: rotate(52deg);
  }
  .lower-half {
    position: absolute;
    margin: 0px;
    top: 42.5px;
    left: -115px;
    height: 300px;
    width: 300px;
    background: none;
    border-radius: 50%;
    z-index: 4;
    border: 12.5px solid #666;
  }
  .lh2 {
    background: white;
    z-index: 1;
  }
  .circle-out {
    position: absolute;
    top: 38px;
    left: 40px;
    background: white;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    border: 7.5px solid #666;
    z-index: 10;
  }
  .circle-in {
    position: absolute;
    height: 17.5px;
    width: 17.5px;
    border: 1.6px solid #666;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-animation: glow 0.8s ease-in-out infinite;
    animation: glow 0.8s ease-in-out infinite;
  }
  .shadow {
    position: absolute;
    left: 11px;
    top: -5px;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: transparent;
    box-shadow: -6px 44px 0px 7px rgba(0, 0, 0, 0.2);
    z-index: 2;
  }
  @-webkit-keyframes glow {
    0%,
    100% {
      background: rgba(255, 0, 0, 0.4);
    }
    50% {
      background: white;
    }
  }
  @keyframes glow {
    0%,
    100% {
      background: rgba(255, 0, 0, 0.4);
    }
    50% {
      background: white;
    }
  }
`;

export default Container;
