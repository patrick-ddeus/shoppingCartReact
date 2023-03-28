import styled from 'styled-components';
import colors from "../../constants/colors"

export const Title = styled.h2`
    text-align: center;
    font-size: 2.25em;
    letter-spacing: 2px;
    color: var(--primary-color);
    margin-top: 40px;
    line-height: 2;
`;

export const ShoppingSection = styled.section`
    background-color: white;
    width: 80%;
    border: 1px solid #eee;
    margin: 20px auto 60px;
    padding: 20px 60px;

    table {
    border-collapse: collapse;
    width: 100%;
    /* height: 400px; */
    margin: auto;
    }

    td {
        text-align: center;
        padding: 8px;
    }

    th {
        padding: 20px;
        text-align: center;
    }

    @media screen and (max-width:1100px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width:820px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width:610px) {
        grid-template-columns: 1fr;

        th {
            display: none;
        }

        td {
            display: block;
            border: 0;
        }

        td:nth-of-type(1):before {
            content: "Nome:";
            font-weight: bold;
        }

        td:nth-of-type(2):before {
            content: "Preço:";
            font-weight: bold;
        }

        td:nth-of-type(3):before {
            content: "Quantidade:";
            font-weight: bold;
        }

        td:nth-of-type(4):before {
            content: "Subtotal:";
            font-weight: bold;
        }
    }
`;

export const ProductFallBack = styled.div`
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100;
    position: relative;
    left: 50%;
    top: 50%;
`;
