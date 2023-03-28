import React from 'react';
import * as S from "./styles";
function CartProduct ({ product, updateQuantity, removeProduct }) {
    const { id, image, title, price } = product;

    return (
        <S.ProductRow key={id}>
            <td>
                <S.ProductDescription>
                    <img src={image} alt="" width="90" />
                    <p>{title.split(" ").slice(0, 2).join(" ")}</p>
                </S.ProductDescription>
            </td>
            <td>{price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</td>
            <td>
                <S.ButtonsBlock id={`quantity-${id}`}>
                    <button className="button-add" onClick={() => updateQuantity(id, true)}>+</button>
                    <input type="number" value={product.quantity} min="1" disabled />
                    <button className="button-rm" onClick={() => updateQuantity(id, false)}>-</button>
                </S.ButtonsBlock>
            </td>
            <td>
                <S.RemoveProduct id={`remove-${id}`} onClick={() => removeProduct(id)}>Remover</S.RemoveProduct>
            </td>
        </S.ProductRow>
    );
}

export default CartProduct;