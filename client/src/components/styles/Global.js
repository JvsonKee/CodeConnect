import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&family=Reggae+One&display=swap');

    :root {
        --text-white: #FFFFFF;
        --text-grey: #A7A7A7;
        --black: #121212;
        --light-black: #242424;
        --purple: #5041FF;
    }

    body, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a {
        margin: 0;
        padding: 0;
        font-family: 'Inter';
    }
`

export default GlobalStyles