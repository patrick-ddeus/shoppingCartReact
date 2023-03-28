import { useContext, createContext, useReducer, useEffect } from "react";
import StoreApi from "../services/fakeStoreApi";
const CartContext = createContext();

const ACTION_TYPES = Object.freeze({
    addProduct: "addProduct",
    editProduct: "editProduct",
    deleteproduct: "deleteProduct",
})

function reducer (state, action) {
    switch (action.type) {
        case ACTION_TYPES.addProduct:
            return [...state, action.payload.value];
        case ACTION_TYPES.editProduct:
            return action.payload.value;
        case ACTION_TYPES.deleteproduct:
            return action.payload.value;
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

    const addProduct = (products, productId) => {
        const storedProduct = products.find(product => product.id === productId);
        const existingProduct = cartProducts.find(product => product.id === storedProduct.id);
        if (existingProduct) {
            const transformedCart = cartProducts.map(cartProduct => cartProduct.id === storedProduct.id ?
                { ...cartProduct, quantity: cartProduct.quantity + 1 } : cartProduct);
            dispatch({ type: ACTION_TYPES.editProduct, payload: { value: transformedCart } });
        } else {
            dispatch({ type: ACTION_TYPES.addProduct, payload: { value: { ...storedProduct, quantity: 1 } } });
        }
    };

    const removeProduct = (productId) => {
        const transformedCart = cartProducts.filter(product => product.id !== productId);
        dispatch({ type: ACTION_TYPES.deleteproduct, payload: { value: transformedCart } });
    };

    const updateQuantity = (productId, increment) => {
        const transformedCart = cartProducts.map(product => product.id === productId ?
            { ...product, quantity: increment ? product.quantity + 1 : product.quantity <= 1 ? 1 : product.quantity - 1 }
            : product);

        dispatch({ type: "editProduct", payload: { value: transformedCart} });
    };

    const getTotalProductsFromCart = () => {
        return cartProducts.reduce((acc, products) => acc + products.quantity, 0);
    };

    return { cartProducts, addProduct, removeProduct, getTotalProductsFromCart, updateQuantity};
}
