import React, { useState, useEffect } from "react";
import StoreApi from "../../services/fakeStoreApi";
import { IoCartOutline } from "react-icons/io5";

const ProductPage = ({cartProducts, setCartProducts}) => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")));

    useEffect(() => {
        async function fetchProductList () {
            const productList = await StoreApi.getProducts();
            setProducts(productList);
        }
        fetchProductList();
    }, []);


    async function addProduct (event) {
        const currentProduct = event.currentTarget.parentElement.parentElement;
        const storeProduct = products.find(product => product.id === Number(currentProduct.id));
        const existingProduct = cartProducts.find(product => product.id === storeProduct.id);

        if (existingProduct) {
            setCartProducts(cartProducts.map(product => product.id === existingProduct.id ?
                                                        {...product, quantity: product.quantity + 1} :
                                                        product));
        }else{
            setCartProducts([...cartProducts, {...storeProduct, quantity: 1}])
        }

    }
    return (
        <main id="products" className="fade-in">
            <div className="productsArea">
                {
                    products.map(product => (
                        <div className="productCard" id={product.id} key={product.id}>
                            <div className="image-area">
                                <a href={product.image}><img src={product.image} alt="" /></a>
                            </div>
                            <div className="desc-area">
                                <span>Adidas</span>
                                <p>{product.title.split(" ").slice(0, 2).join(" ")}</p>
                                <div className="starArea">
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star"></i>
                                    <i className="fa fa-star star"></i>
                                </div>
                                <h4>R$ {product.price.toString().replace(".", ",")}</h4>
                                <IoCartOutline name="cart-outline" className="cart" onClick={addProduct}></IoCartOutline>
                            </div>
                        </div>
                    ))
                }
            </div>
        </main>
    );
};

export default ProductPage;