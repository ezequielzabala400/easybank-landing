import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --DarkBlue: hsl(233, 26%, 24%);
        --LimeGreen: hsl(136, 65%, 51%);
        --BrightCyan: hsl(192, 70%, 51%);
        --GrayishBlue: hsl(233, 8%, 62%);
        --LightGrayishBlue: hsl(220, 16%, 96%);
        --VeryLightGray: hsl(0, 0%, 98%);
        --White: hsl(0, 0%, 100%);
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        scroll-behavior: smooth;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-family: 'Public Sans', sans-serif;
    }
`