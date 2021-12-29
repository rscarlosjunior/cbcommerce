import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
    min-height: 100%;
    font-size: 62.5%;
  }

  body, #app {
    width: 100%;
    height: 100%;
    display:flex;
    min-height: 100vh;
    position: relative;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-width: 0px;
    width: 100%;
    height: 100%;
    background: transparent;
  }

  select,
  option {
    /* Paragraph */
    font-family: 'Lato-Regular' !important;
    font-style: normal;
    font-weight: 500;
    font-size: 16px !important;
    line-height: 24px;

    /* gray / dark */
    color: #333333;
  }

  input:focus,
  textarea:focus {
    outline: none;
    box-shadow: none;

    /* tannat / default */
    border-color: #c81a78 !important;
  }
`

export default GlobalStyles
