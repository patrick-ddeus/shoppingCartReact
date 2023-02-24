import styled from 'styled-components';

export const ProductArea = styled.div`
    padding: 40px 80px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width:610px) {
        justify-content: center;
    }
`;
