import React from 'react';
import { Link } from "react-router-dom";
import * as S from './styles';

const ConfirmArea = () => {
    return (
        <S.ConfirmArea className="confirm-area">
            <div className="column-left">
                <p>Se você tem um código de promoção, por favor insira abaixo:</p>
                <S.InputArea className="input-area">
                    <input type="text" name="" id="" placeholder="Por favor insira o código de promoção" />
                    <button className="apply-descount"> Aplicar Desconto</button>
                </S.InputArea>
            </div>
            <S.ColumnRight >
                <button>Comprar</button>
                <button className="update-quantity">Atualizar Quantidade</button>
                <button>
                    <Link to="/products" style={{ color: "black" }}>
                        Continuar Comprando
                    </Link>
                </button>
            </S.ColumnRight>
        </S.ConfirmArea>
    );
}

export default ConfirmArea


