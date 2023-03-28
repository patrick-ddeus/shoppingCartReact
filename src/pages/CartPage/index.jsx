import React from "react";
import { useCart } from "../../hooks/CartProductContext";
import ConfirmArea from "./ConfirmArea";
import PriceArea from "./PriceArea";
import * as S from "./styles";

const CartPage = () => {
    const {cartProducts, removeProduct, updateQuantity } = useCart();
    function getTotal () {
        return cartProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    }
    
    return (
        <main id="main" className="fade-in">
            <S.Title className="main-title">Shopping Cart</S.Title>
            <S.ShoppingSection id="shopping-section">
                <table className="products-list">
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Quantidade</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartProducts.length === 0 ? <S.ProductFallBack > <h2>Você ainda não adicionou nada =( </h2> </S.ProductFallBack> :
                            cartProducts.map(product => (
                                <S.ProductRow key={product.id}>
                                    <td>
                                        <S.ProductDescription>
                                            <img src={product.image} alt="" width="90" />
                                            <p>{product.title.split(" ").slice(0, 2).join(" ")}</p>
                                        </S.ProductDescription>
                                    </td>
                                    <td>{product.price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</td>
                                    <td>
                                        <S.ButtonsBlock id={`quantity-${product.id}`}>
                                            <button className="button-add" onClick={() => updateQuantity(product.id, true)}>+</button>
                                            <input type="number" value={product.quantity} min="1" disabled />
                                            <button className="button-rm" onClick={() => updateQuantity(product.id, false)}>-</button>
                                        </S.ButtonsBlock>
                                    </td>
                                    <td>
                                        <S.RemoveProduct id={`remove-${product.id}`} onClick={() => removeProduct(product.id)}>Remover</S.RemoveProduct>
                                    </td>
                                </S.ProductRow>
                            ))}
                    </tbody>
                </table>
                <PriceArea total={getTotal()} />
                <ConfirmArea />
            </S.ShoppingSection>
        </main>
    );
};

export default CartPage;