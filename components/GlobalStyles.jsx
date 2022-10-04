import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
    :root {
        --primary: ${({ theme }) => theme.primary};
        --second: ${({ theme }) => theme.second};
        --complement: ${({ theme }) => theme.complement};
        --secondcomplement: ${({ theme }) => theme.secondcomplement};
        --background: ${({ theme }) => theme.background};
        --seccomplementdark: #a8a8a8;
        --golden: #ffd700;
        --silver: #C0C0C0;
        --bronze: #824A02;
    }
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        transition: all 0.50s linear;
    }
`