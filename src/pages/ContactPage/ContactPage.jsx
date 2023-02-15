import React from 'react';
import { FaGithub, FaFacebook, FaRedditAlien, FaTwitter, FaInstagram } from "react-icons/fa";
import Wave from "../../assets/img/wave.svg";

function ContactPage () {
    return (
        <>
            <div className="contact-page fade-in">
                <div className="icons-area">
                    <button className="icon-link github-icon">
                        <FaGithub />
                    </button>

                    <button className="icon-link facebook-icon">
                        <FaFacebook />
                    </button>

                    <button className="icon-link reddit-icon">
                        <FaRedditAlien />
                    </button>

                    <button className="icon-link twitter-icon">
                        <FaTwitter />
                    </button>

                    <a href="https://www.instagram.com/patric_ddeus/" className="icon-link instagram-icon">
                        <FaInstagram />
                    </a>
                </div>
            </div>
            <div className="container-wave">
                <img src={Wave} alt="" className="wave" style={{viewBox:"0 0 1366 220"}} />
            </div>
        </>
    );
}

export default ContactPage;