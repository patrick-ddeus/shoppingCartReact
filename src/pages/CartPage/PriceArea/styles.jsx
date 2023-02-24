import styled from 'styled-components';

export const PriceArea = styled.div`
    border-top: 1px solid #ddd;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: auto;
    text-align: center;
    gap: 40px;

    p{
        border: 1px solid #ddd;
        margin-top: 20px;
        padding: 20px 20px 20px 40px;
        display: flex;
        align-items: center;
        gap: 10px;

        .total span{
            font-size: 1.25em;
        }

        span{
            font-weight: 700;
            font-size:1.0625em;
        }
    }
`;
