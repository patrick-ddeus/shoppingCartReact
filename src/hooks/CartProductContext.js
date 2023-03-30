import { useContext, createContext, useReducer, useEffect } from "react";
import StoreApi from "../services/fakeStoreApi";
const CartContext = createContext();

const ACTION_TYPES = Object.freeze({
    addProduct: "addProduct",
    editProduct: "editProduct",
});

function reducer (state, action) {
    switch (action.type) {
        case ACTION_TYPES.addProduct:
            return [...state, action.value];
        case ACTION_TYPES.editProduct:
            return action.value;
        default:
            return state;
    }
}

export function CartProvider ({ children }) {
    const initValue = JSON.parse(localStorage.getItem("cart")) || [];
    const [cartProducts, dispatch] = useReducer(reducer, initValue);

    useEffect(() => {
        async function fetchProductList () {
            StoreApi.getProducts();
        }
        fetchProductList();
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartProducts));
    }, [cartProducts]);

    return (
        <CartContext.Provider value={{ cartProducts, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart () {
    const { cartProducts, dispatch } = useContext(CartContext);

    const addProductToCart = (products, productId) => {
        const productToAdd = products.find(product => product.id === productId);
        const existingProductInCart = cartProducts.find(product => product.id === productToAdd.id);

        if (existingProductInCart) {
            const updatedQuantity = cartProducts.map(product => {
                if (product.id === productToAdd.id) {
                    return { ...product, quantity: product.quantity + 1 };
                } else {
                    return product;
                }
            });

            dispatch({ type: ACTION_TYPES.editProduct, value: updatedQuantity });
        } else {
            const productWithQuantity = { ...productToAdd, quantity: 1 };
            dispatch({ type: ACTION_TYPES.addProduct, value: productWithQuantity });
        }
    };

    const removeProduct = (productId) => {
        const updatedCartProducts = cartProducts.filter(({ id }) => id !== productId);
        dispatch({ type: ACTION_TYPES.editProduct, value: updatedCartProducts });
    };

    const updateQuantity = (productId, increment) => {
        const updatedCart = cartProducts.map(product => {
            if (product.id === productId) {
                const newQuantity = increment ? product.quantity + 1 : product.quantity - 1;
                const quantity = newQuantity <= 1 ? 1 : newQuantity; // Garante que a quantidade não seja menor que 1
                return { ...product, quantity };
            }
            return product;
        });

        dispatch({ type: ACTION_TYPES.editProduct, value: updatedCart });
    };

    const getTotalProductsFromCart = () => {
        return cartProducts.reduce((acc, products) => acc + products.quantity, 0);
    };

    return { cartProducts, addProductToCart, removeProduct, getTotalProductsFromCart, updateQuantity };
}
