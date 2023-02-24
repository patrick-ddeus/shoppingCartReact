import React from "react";
import ConfirmArea from "./ConfirmArea";
import PriceArea from "./PriceArea";
import * as S from "./styles";
const CartPage = ({cartProducts, setCartProducts}) => {
    
    function removeProduct(event){
        const productId = event.currentTarget.id.split("-")[1]
    
        const transformedProducts = cartProducts.filter(product => product.id !== Number(productId))
        setCartProducts(transformedProducts)
    }

    function updateButton(event, increment){
        const button = event.currentTarget
        const id = button.parentElement.id.split("-")[1]

        const input = increment ? button.nextElementSibling : button.previousElementSibling
        input.value = increment ? ( Number(input.value) + 1) : input.value <= 1 ? 1 : input.value - 1
        
        const transformedProducts = cartProducts.map(product => product.id === Number(id) ? 
                                                    {...product, quantity: Number(input.value)} 
                                                    : product )
        setCartProducts(transformedProducts)
    }

    function getTotal(){
        return cartProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0)
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
                                    <td>{product.price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</td>
                                    <td>
                                        <S.ButtonsBlock id={`quantity-${product.id}`}>
                                            <button className="button-add" onClick={(event) => updateButton(event, true)}>+</button>
                                            <input type="number" value={product.quantity} min="1" disabled />
                                            <button className="button-rm" onClick={(event) => updateButton(event, false)}>-</button>
                                        </S.ButtonsBlock>
                                    </td>
                                    <td>
                                        <S.RemoveProduct id={`remove-${product.id}`} onClick={removeProduct}>Remover</S.RemoveProduct>
                                    </td>
                                </S.ProductRow>
                            ))}
                    </tbody>
                </table>
                <PriceArea total={getTotal()}/>
                <ConfirmArea />
            </S.ShoppingSection>
        </main>
    );
};

export default CartPage;