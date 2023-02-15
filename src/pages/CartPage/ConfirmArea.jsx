import React from 'react';
import {Link} from "react-router-dom"
function ConfirmArea () {
    return (
        <div className="confirm-area">
            <div className="column-left">
                <p>Se você tem um código de promoção, por favor insira abaixo:</p>
                <div className="input-area">
                    <input type="text" name="" id="" placeholder="Por favor insira o código de promoção" />
                    <button className="apply-descount"> Aplicar Desconto</button>
                </div>
            </div>
            <div className="column-right">
                <button>Comprar</button>
                <button className="update-quantity">Atualizar Quantidade</button>
                <button>
                    <Link to="/products" style={{ color: "black" }}>
                        Continuar Comprando
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default ConfirmArea;