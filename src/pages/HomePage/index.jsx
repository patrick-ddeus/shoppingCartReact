import React from "react";
import Wave from "../../assets/img/wave.svg";
import GuyCart from "../../assets/img/guy-cart.png"
import * as S from "./styles"

const Main = () => (
    <main id="main" className="fade-in">
        <S.HomePage>
            <S.Row>
                <S.ColumnLeft>
                    <h2>Welcome to our clothing store</h2>
                    <p className="product-p">Find the latest trends in clothing and accessories in our online store. </p>
                </S.ColumnLeft>
                <S.ColumnRight>
                    <img src={GuyCart} alt="" width={"550px"}></img>
                </S.ColumnRight>
            </S.Row>
        </S.HomePage>
            <img src={Wave} alt="" className="wave"/>
    </main>
);

export default Main;