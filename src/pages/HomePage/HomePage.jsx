import React from "react";
import Wave from "../../wave.svg";
const Main = () => (
    <main id="main" className="fade-in">
        <section id="homepage">
            <div className="row">
                <div className="col-left">
                    <h2>Welcome to our clothing store</h2>
                    <p className="product-p">Find the latest trends in clothing and accessories in our online store. </p>
                </div>
                <div className="col-right">
                    <img src="./assets/img/guy-cart.png" alt="" width={"550px"}></img>
                </div>
            </div>
        </section>
        <div className="container-wave">
            <img src={Wave} alt="" className="wave" />
        </div>
    </main>
);

export default Main;