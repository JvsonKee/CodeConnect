import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&family=Reggae+One&display=swap');

    :root {
        --white: #FFFFFF;
        --off-white: #FFE9CE;
        --tan: #AF997F;
        --green: #2DA062;
        --green-low: rgba(47, 91, 81, 0.5);
        --brown: #282521;
        --light-brown: #2B2824;
        --shadow: rgba(0, 0, 0, 0.25);
    }

    body, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        background-color: var(--brown);
    }
`

export default GlobalStyles