import { createGlobalStyle } from 'styled-components';
import theme from './theme';
const { fonts, colors } = theme;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat/Montserrat-Regular.ttf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat/Montserrat-Light.ttf');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat/Montserrat-Bold.ttf');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat/Montserrat-SemiBold.ttf');
    font-weight: 600;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${fonts.montserrat};
    color: ${colors.white};
    background-color: ${colors.dark};
  }
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 500;
  }
  p {
    line-height: 1.5;
  }
  a {
    text-decoration: none;
    transition: ${theme.transition};
    color: ${colors.blue};
    display: inline-block;
    &:hover,
    &:focus {
    }
  }
  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  svg {
    fill: currentColor;
  }
  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    transition: ${theme.transition};
    &:focus,
    &:active {
      outline: 0;
    }
  }
  input {
    border-radius: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

`;

export default GlobalStyle;
