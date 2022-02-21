import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;500;700&display=swap'); */

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: Raleway, sans-serif;
        font-family: "Playfair Display", serif;
    }
`
