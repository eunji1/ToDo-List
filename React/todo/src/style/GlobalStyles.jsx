import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
/* CSS Reset */
    ${reset}

/* 공통적인 CSS 세팅 */
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200&display=swap');

    body {
    margin: 0;
    font-family: 'Noto Sans', sans-serif;
    background-color: #e8dcb9;
    }

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    }
`;
