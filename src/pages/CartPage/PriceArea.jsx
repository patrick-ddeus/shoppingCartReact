import React from 'react';

export default function PriceArea ({total}) {
    return (
        <div className="price-area">
            <p className="descount">Desconto: <span>R$ 0,00 </span></p>
            <p className="delivery">Entrega: <span>R$ 0,00 </span></p>
            <p className="subtotal">SubTotal: <span>R$ {total.toFixed(2)} </span></p>
            <p className="total">Total: <span>R$ {total.toFixed(2)} </span></p>
        </div>
    );
}

