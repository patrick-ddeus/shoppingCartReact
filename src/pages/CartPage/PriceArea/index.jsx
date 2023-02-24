import React from 'react';
import * as S from './styles';
const PriceArea = ({ total }) => {
    return (
        <S.PriceArea>
            <p>Desconto: <span>R$ 0,00 </span></p>
            <p>Entrega: <span>R$ 0,00 </span></p>
            <p>SubTotal: <span>R$ {total.toFixed(2)} </span></p>
            <p className="total">Total: <span>R$ {total.toFixed(2)} </span></p>
        </S.PriceArea>
        )
};

export default PriceArea