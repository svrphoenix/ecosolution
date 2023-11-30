import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  @font-face {
    font-family: 'Fira Sans';
    src: local('Fira Sans Light'), local('Fira-Sans-Light'),
      url('./assets/fonts/firasans/FiraSans-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    }

  @font-face {
    font-family: 'Fira Sans';
    src: local('Fira Sans Regular'), local('Fira-Sans-Regular'),
      url('./assets/fonts/firasans/FiraSans-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    }

  @font-face {
    font-family: 'Fira Sans';
    src: local('Fira Sans Medium'), local('Fira-Sans-Medium'),
      url('./assets/fonts/firasans/FiraSans-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    }

  @font-face {
    font-family: 'Oswald';
    src: local('Oswald Regular'), local('Oswald-Regular'),
      url('./assets/fonts/oswald/Oswald-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    }

  @font-face {
    font-family: 'Oswald';
    src: local('Oswald Medium'), local('Oswald-Medium'),
      url('./assets/fonts/oswald/Oswald-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    }


  @font-face {
    font-family: 'Oswald';
    src: local('Oswald Bold'), local('Oswald-Bold'),
      url('./assets/fonts/oswald/Oswald-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    }

    @font-face {
    font-family: 'Fontspring';
    src: local('Fontspring Regular'), local('Fontspring-Regular'),
      url('./assets/fonts/fontspring/Fontspring-DEMO-allroundgothic-thick.woff2') format('woff2');
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
  margin: 0;
  /* min-width: 320px; */
  font-family: Fira Sans;
}

h1,h2,h3,h4,h5,h6,p {
  margin: 0;
  padding: 0;
}

a {
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
`;

export default GlobalStyle;
