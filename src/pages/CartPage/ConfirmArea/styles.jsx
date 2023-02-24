import styled from 'styled-components';
import color from "../../../constants/colors";

export const ConfirmArea = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    margin-top: 1.25em;

`;

export const InputArea = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1.25em;

    input{
        width: 100%;
        height: 50px;
        padding: 0 1em;
        border: 1px solid #ddd;
    }

    button {
        background-color: var(--primary-color);
        color: white;
        border: 0;
        height: 50px;
        width: 300px;
        font-family: inherit;
        cursor: pointer;
        font-size: 1.0625em;
        margin-right: 8px;
    }

    @media screen and (max-width:820px) {
        margin-bottom: 20px;
    }
`;

export const ColumnRight = styled.div`
    padding-left: 1.875em;

    button:first-child {
        background-color: ${color.primaryColor};
        color: #fff;
        font-weight: 600;
        font-size: 1em;
        border: 0;
    }

    button {
        display: block;
        width: 100%;
        min-width: 195px;
        height: 50px;
        margin-bottom: 10px;
        cursor: pointer;
        color: black;
        font-family: inherit;
        text-align: left;
        padding-left: 1.25em;
        font-weight: 500;
        border: 1px solid #ddd;
    }

    a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    @media screen and (max-width:820px) {
        padding-left: 0;
    }   

`;
