import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        background-color: ${props => props.theme["carbon-900"]};
        color: ${props => props.theme["gray-100"]};
        -webkit-font-smoothing: antialiased;
        height: 100dvh;
        scroll-behavior: smooth;

        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-track {
            background: ${({ theme }) => theme["gray-800"]};
            border-radius: 4px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme["red-700"]};
            border-radius: 4px;
            border: 2px solid ${({ theme }) => theme["gray-800"]};
        }
    }

    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
    }

`;
