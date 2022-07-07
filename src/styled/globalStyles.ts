import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`    
    *,
    *::after,
    *::before {
        margin: 0;    
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;    
    }

    body {
        box-sizing: border-box;      
        line-height: 1.3;
        overflow-x: hidden;
        color: ${({ theme }) => theme.slate};
        background-color: #0a192f;
        font-size: ${({ theme }) => theme.fontSize.xl};

        ${({ theme }) => theme.media.phone} {
            font-size: ${({ theme }) => theme.fontSize.lg}
        }
    }

    a {
        display: inline-block;
        text-decoration: none;
        position: relative;
        transition: ${({ theme }) => theme.transition.normal};
    }

    button {
        cursor: pointer;
        border: 0px;
        border-radius: 0px;
    }

    section {
        margin: 0px auto;
        padding: 10rem 0px;
        max-width: 1000px;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0px 0px 1rem;
        font-weight: 600;
        color: ${({ theme }) => theme.lightSlate};
        line-height: 1.1;
    }

    p {
        margin: 0px 0px 1.5rem;
    }

    .big-heading {
        margin: 0px;
        font-size: clamp(4rem, 8vw, 8rem);
    }
`;

export default GlobalStyle;
