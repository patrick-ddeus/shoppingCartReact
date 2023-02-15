import React from "react";
import ConfirmArea from "./ConfirmArea";
import PriceArea from "./PriceArea";

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
            <h2 className="main-title">Shopping Cart</h2>
            <section id="shopping-section">
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
                        {cartProducts.length === 0 ? <div className="no-product"> <h2>Você ainda não adicionou nada =( </h2> </div> :
                            cartProducts.map(product => (
                                <tr className="product-row" key={product.id}>
                                    <td>
                                        <div className="product-description">
                                            <img src={product.image} alt="" width="90" />
                                            <p>{product.title.split(" ").slice(0, 2).join(" ")}</p>
                                        </div>
                                    </td>
                                    <td>{product.price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</td>
                                    <td>
                                        <div className="buttons-block" id={`quantity-${product.id}`}>
                                            <button className="button-add" onClick={(event) => updateButton(event, true)}></button>
                                            <input type="number" value={product.quantity} min="1" disabled className="quantity-input" />
                                            <button className="button-rm" onClick={(event) => updateButton(event, false)}></button>
                                        </div>
                                    </td>
                                    <td>
                                        <button className="remove-btn" id={`remove-${product.id}`} onClick={removeProduct}>Remover</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                <PriceArea total={getTotal()}/>
                <ConfirmArea />
            </section>
        </main>
    );
};

export default CartPage;