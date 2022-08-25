import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}

    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200&display=swap');

    body {
    margin: 0;
    font-family: 'Noto Sans', sans-serif;
    background-color: #e8dcb9;
    width: 1920px;
    }

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    }
`;
