import styled from 'styled-components';
import colors from '../../../constants/colors';
export const ProductRow = styled.tr`
    border-top: 1px solid #ddd;
    height: 160px;

    &:first-child {
        border: 0;
    }

    input[type="number"] {
        width: 50px;
        height: 40px;
        text-align: center;
        outline: 0;
    }
`;

export const ProductDescription = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const ButtonsBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .button-add{
        width: 50px;
        height: 40px;
        border: 0;
        background-color: ${colors.primaryColor};
        font-size: 1.125em;
        cursor: pointer;
        color: white;
    }

    .button-rm{
        width: 50px;
        height: 40px;
        border: 0;
        background-color: #ccc;
        font-size: 1.0625rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const RemoveProduct = styled.button`
    background-color: #ff0000;
    color: #ffffff;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
`;