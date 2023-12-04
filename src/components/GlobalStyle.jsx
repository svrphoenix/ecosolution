import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import { device } from '../constants/media';

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
    font-family: 'Fontspring';
    src: local('Fontspring Regular'), local('Fontspring-Regular'),
      url('./fonts/fontspring/Fontspring-DEMO-allroundgothic-thick.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    } 

    @font-face {
    font-family: 'CA Saygon Text';
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

body {
  font-family: Fira Sans, sans-serif;
  background-color: #F3F5FA;
}

h1,h2,h3,h4,h5,h6,p {
  margin: 0;
  padding: 0;
}

a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
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

button {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: inherit;
}

#root {
  min-width: 360px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media ${device.mobile} {
    max-width: 480px;
  }

  @media ${device.tablet} {
    max-width: 768px;
    padding: 0 30px;
  }
  
  @media ${device.desktop} {
    max-width: 1280px;
    padding: 0 100px;
  }
}

.hidden{
  overflow: hidden;
}
`;

export default GlobalStyle;