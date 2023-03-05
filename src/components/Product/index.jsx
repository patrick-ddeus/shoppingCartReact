import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import * as S from './styles';
const Product = ({ product, addProduct }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= product.rating.rate) {
            stars.push(<FaStar key={i} style={{color:"#BD9334",margin: "5px 1px"}} />);
        } else if (i === Math.ceil(product.rating.rate)) {
            stars.push(<FaStarHalfAlt key={i} style={{color:"#BD9334",margin: "5px 1px"}} />);
        }
    }
    
    return (
        <S.ProductCard className="productCard" id={product.id} key={product.id}>
            <S.ImageArea>
                <a href={product.image}><img src={product.image} alt="" /></a>
            </S.ImageArea>
            <S.DescriptionArea>
                <span>Adidas</span>
                <p>{product.title.split(" ").slice(0, 2).join(" ")}</p>
                <div>
                    {stars}
                </div>
                <h4>{product.price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</h4>
                <IoCartOutline name="cart-outline" className="cart" onClick={addProduct}></IoCartOutline>
            </S.DescriptionArea>
        </S.ProductCard>
    );
}

export default Product;