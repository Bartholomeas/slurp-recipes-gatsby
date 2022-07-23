import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poppins:wght@400;700&display=swap');

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-family: 'Playfair Display', serif;
    }
`
