import React from "react";
import { useCart } from "../../hooks/CartProductContext";
import ConfirmArea from "./ConfirmArea";
import PriceArea from "./PriceArea";
import CartProduct from "./CartProduct";
import * as S from "./styles";

const CartPage = () => {
    const { cartProducts, removeProduct, updateQuantity } = useCart();
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
                                <CartProduct key={product.id} product={product} updateQuantity={updateQuantity} removeProduct={removeProduct} />
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