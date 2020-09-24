import { css } from '@emotion/core';

const globalCSS = css`
  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  #root {
    min-height: 100vh;
  }
  html {
    heigth: 100%;
    font-family: 'Press Start 2P', cursive;
    box-sizing: border-box;
    font-size: 15px;
  }
  body {
    heigth: 100%;
    margin: 0;
    padding: 0;
    background: linear-gradient(
      15deg,
      rgba(41, 41, 41, 1) 4%,
      rgba(49, 49, 49, 1) 24%,
      rgba(128, 128, 128, 1) 64%,
      rgba(138, 138, 138, 1) 70%,
      rgba(230, 230, 230, 1) 81%,
      rgba(255, 255, 255, 1) 86%,
      rgba(220, 220, 220, 1) 89%,
      rgba(230, 230, 230, 1) 100%
    );
    background-color: #09a8ff;
    background-blend-mode: overlay;
  }

  .container {
    padding-right: 1rem;
    padding-left: 1rem;
    margin: 2rem auto 2rem auto;
    overflow: overlay;
  }

  img {
    image-rendering: pixelated;
  }

  .pokemon-sprite {
    width: 100%;
    display: flex;
    image-rendering: pixelated;
    border: inset #9aa28b 3px;
    border-radius: 5px;
    margin: 10px 0;
    box-sizing: border-box;
    background: linear-gradient(
      15deg,
      #cad5b5 64%,
      #dde2d4 70%,
      #dde2d4 81%,
      #fff 86%,
      #dde2d4 89%,
      #dde2d4 100%
    );
  }

  .pokemon-description {
    font-size: 18px;
    letter-spacing: 0;
    min-height: 115px;
    box-sizing: border-box;
    flex: 1;
  }
  .screen {
    background: linear-gradient(
      14deg,
      rgb(165, 205, 83) 60%,
      rgb(193, 217, 144) 65%
    );
    padding: 5px;
  }

  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
`;

export default globalCSS;
