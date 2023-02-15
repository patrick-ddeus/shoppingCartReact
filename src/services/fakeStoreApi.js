/* eslint-disable import/no-anonymous-default-export */
import Axios from "axios";

class FakeStore {
    constructor(url) {
        this.url = (endpoint = "") => `${url}/${endpoint}`;
    }

    getProducts = () => {
        function filterProducts (productsList) {
            const newProducts = productsList.filter(product => product.category === "men's clothing" || product.category === "women's clothing");
            localStorage.setItem("products", JSON.stringify(newProducts))
            return newProducts;
        }

        return Axios.get(this.url("products"))
            .then(response => response.data)
            .then(filterProducts);
    };

    getProductById = (id) =>{
        return Axios.get(this.url(`products/${id}`)).then(response => response.data)
    }
}

export default new FakeStore("https://fakestoreapi.com")


