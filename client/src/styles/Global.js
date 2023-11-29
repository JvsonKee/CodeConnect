import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&family=Reggae+One&display=swap');

    :root {
        // brown/brown theme
        /* --white: #FFFFFF;
        --off-white: #FFE9CE;
        --tan: #AF997F;
        --green: #2DA062;
        --green-low: rgba(47, 91, 81, 0.5);
        --brown: #282521;
        --light-brown: #2B2824;
        --shadow: rgba(0, 0, 0, 0.25); */

        // black/blue theme
        --white: #FFFFFF;
        --grey: #9F9F9F;
        --black: #121212;
        --light-black: #161616;
        --blue: #558FFF;
        --light-blue: #94B8FF;
        --blue-low: rgba(85, 143, 255, 0.4);
        --shadow: rgba(0, 0, 0, 0.25);
    }

    body, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        background-color: var(--black);
    }
`

export default GlobalStyles