import React, { useState, useEffect } from "react";
import StoreApi from "../../services/fakeStoreApi";
import Product from "./Product";

const ProductPage = ({cartProducts, setCartProducts}) => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")));

    useEffect(() => {
        async function fetchProductList () {
            const productList = await StoreApi.getProducts();
            setProducts(productList);
        }
        fetchProductList();
    }, []);


    function addProduct (event) {
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
                        <Product product={product} addProduct={addProduct} key={product.id}/>
                    ))
                }
            </div>
        </main>
    );
};

export default ProductPage;