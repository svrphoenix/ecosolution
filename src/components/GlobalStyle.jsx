import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from '../constants/theme';

const GlobalStyle = createGlobalStyle`
:root {
  @font-face {
    font-family: 'Fira Sans';
    src: local('Fira Sans Light'), local('Fira-Sans-Light'),
      url('./fonts/firasans/FiraSans-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    }

  @font-face {
    font-family: 'Fira Sans';
    src: local('Fira Sans Regular'), local('Fira-Sans-Regular'),
      url('./fonts/firasans/FiraSans-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    }

  @font-face {
    font-family: 'Fira Sans';
    src: local('Fira Sans Medium'), local('Fira-Sans-Medium'),
      url('./fonts/firasans/FiraSans-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    }

  @font-face {
    font-family: 'Oswald';
    src: local('Oswald Regular'), local('Oswald-Regular'),
      url('./fonts/oswald/Oswald-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    }

  @font-face {
    font-family: 'Oswald';
    src: local('Oswald Medium'), local('Oswald-Medium'),
      url('./fonts/oswald/Oswald-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    }


  @font-face {
    font-family: 'Oswald';
    src: local('Oswald Bold'), local('Oswald-Bold'),
      url('./fonts/oswald/Oswald-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    }

    @font-face {
    font-family: ${fonts.logoMain};
    src: local('Fontspring Regular'), local('Fontspring-Regular'),
      url('./fonts/fontspring/Fontspring-DEMO-allroundgothic-thick.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    } 

    @font-face {
    font-family: ${fonts.logoAdd};
    src: local('CA Saygon Text Regular'), local('CA-Saygon-Text-Regular'),
      url('./fonts/casaygontext/CASaygonText-Regular.woff2') format('woff2'),
      url('./fonts/casaygontext/CASaygonText-Regular.woff') format('woff'),
      url('./fonts/casaygontext/CASaygonText-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    }

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  
}

html{scroll-behavior:smooth}

body {
  font-family: ${fonts.main}, sans-serif;
  color:${colors.mainColor};
  background-color: ${colors.bodyBackground};
}

h1,h2,h3,h4,h5,h6,p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img{
  display: block;
  max-width: 100%;
  height: auto;
}

a, button {
  cursor: pointer;
  display: inline-flex;
  padding: 0;
  border: none;
  background-color: transparent;

  &:focus,
  &:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
}

button {
  font-family: inherit;
}

a {
  text-decoration: none;
}


address {
  font-style: normal;
}

#root {
  min-width: 360px;
}

.hidden{
  overflow: hidden;
}
`;

export default GlobalStyle;
