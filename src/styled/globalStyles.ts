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
        color: ${({ theme }) => theme.black};
        background-color: #0a192f;

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
`;

export default GlobalStyle;
