import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";
import helpers from "./helpers";

export const GlobalStyles = createGlobalStyle`

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

html {
    font-size: 62.5%;
}

body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito Sans', sans-serif;
    transition: all 0.25s linear;
}

h1 {
    font-size: 1.7rem;
    font-weight: ${helpers.fontWeight.extraBold}

    @media only screen and ${helpers.device.md} {
        font-size: 2.75rem;
    } ;

    @media only screen and ${helpers.device.md} {
        font-size: 2.35rem;
    } ;
}

ul{
    list-style: none;
    padding: 0;
}

img {
    max-width: 100%;
}

`;
