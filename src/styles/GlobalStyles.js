import { createGlobalStyle, keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: white;
    }

    ul {
        list-style: none;
    }

    body {
        font-family: "Barlow Semi Condensed", sans-serif;
        background-color: #f8f8f8;
        overflow-x: hidden;
        width:100vw;
        height:100vh;
    }

    button{
        background-color: transparent;
        border:0;
        cursor:pointer;
    }

    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;

    }

    input[type=number] {
        -moz-appearance: textfield;
        appearance: textfield;

    }

    #main{
        position:relative;
        height:80%;
    }

    .wave{
        position:absolute;
        bottom:-55px;
        z-index:-1;
        width:100%;
    }

    @media screen and (min-width:1200px) {
    .wave{
        bottom:-68px; 
    }

    .fade-in {
        animation: ${fadeIn} 1s ease-in;
    }
}

`;

