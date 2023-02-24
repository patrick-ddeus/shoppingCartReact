import styled from 'styled-components';

export const HomePage = styled.section`
    h2{
        text-align: center;
        font-size: 2.875em;
        line-height: 1;
        width: 300px;
        margin: 50px auto;
        margin-bottom: 20px;
    }

    p{
        color: #444;
        text-align: center;
        padding-bottom: 40px;
    }
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const ColumnLeft = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 120px;
`;


export const ColumnRight = styled.div`
    margin-left:20px;
`;

