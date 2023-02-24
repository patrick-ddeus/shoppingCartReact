import styled from 'styled-components';

export const ProductCard = styled.div`
    width: 270px;
    min-width: 270px;
    border: 1px solid #F1EFF1;
    background-color: #c5e2e0;
    padding: 10px 10px 25px 10px;
    border-radius: 30px;
    box-shadow: 20px 20px 35px rgba(0, 0, 0, 0.03);
    cursor: pointer;
    transition: all .2s ease;
    margin-top: 25px;

    &:hover{
      box-shadow: 20px 20px 55px rgba(0, 0, 0, 0.06);
    }
`;

export const ImageArea = styled.div`
    background-color: #fff;
    width: 100%;
    height: 300px;
    border-radius: 30px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 150px;
    }
`;

export const DescriptionArea = styled.div`
    position: relative;

    span{
        color: #444;
        padding-bottom: 10px;
        display: inline-block;
    }

    p{
        font-weight: 700;
        font-size: .9em;
        line-height: 1.5;
    }

    h4{
        color: #5C8788;
    }

    .cart{
        background-color: #e8f6ea;
        color: #088178;
        border-radius: 50px;
        font-weight: 500;
        font-size: 2.0625em;
        padding: 5px;
        position: absolute;
        bottom: 5px;
        right: 5px;
    }
`;