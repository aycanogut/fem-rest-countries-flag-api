import { createGlobalStyle } from 'styled-components'
import helpers from '../styles/helpers'

interface GlobalStyleProps {
  theme: {
    body: string
    text: string
  }
}

export const GlobalStyles = createGlobalStyle<GlobalStyleProps>`

// fonts
@font-face {
    font-family: 'Nunito Sans';
    src: url('src/assets/fonts/NunitoSans-SemiBold.woff2') format('woff2'),
        url('src/assets/fonts/NunitoSans-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Nunito Sans';
    src: url('src/assets/fonts/NunitoSans-Light.woff2') format('woff2'),
        url('src/assets/fonts/NunitoSans-Light.woff2') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Nunito Sans';
    src: url('src/assets/fonts/NunitoSans-ExtraBold.woff2') format('woff2'),
        url('src/assets/fonts/NunitoSans-ExtraBold.woff2') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

// global styles

* {
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    margin: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito Sans', sans-serif;
    transition: none;
}

h1 {
    font-size: 1.7rem;
    font-weight: ${helpers.fontWeight.extraBold}

    @media only screen and ${helpers.device.md} {
        font-size: 2.75rem;
    } 

    @media only screen and ${helpers.device.md} {
        font-size: 2.35rem;
    } 
}

ul {
    list-style: none;
    padding: 0;
}

img {
    max-width: 100%;
}

a {
    text-decoration: none !important;
    color: ${({ theme }) => theme.text};

}
`
