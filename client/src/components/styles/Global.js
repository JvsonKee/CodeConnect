import { createGlobalStyle } from "styled-components";

const Normalizer = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&family=Reggae+One&display=swap');

    :root {
        --white: #FFFFFF;
        --grey: #A7A7A7;
        --black: #121212;
        --light-black: #1B1B1B;
        --purple: #5041FF;
        --purple-low-op: #28284D;
        --lavender: #948BFF;
    }

    body, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        background-color: var(--black);
    }
    `

export default Normalizer