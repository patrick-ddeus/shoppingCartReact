import React from 'react';
import { FaGithub, FaFacebook, FaRedditAlien, FaTwitter, FaInstagram } from "react-icons/fa";
import Wave from "../../assets/img/wave.svg";

function ContactPage () {
    return (
        <>
            <div className="contact-page fade-in">
                <div className="icons-area">
                    <a href="" className="icon-link github-icon">
                        <FaGithub />
                    </a>

                    <a href="" className="icon-link facebook-icon">
                        <FaFacebook />
                    </a>

                    <a href="" className="icon-link reddit-icon">
                        <FaRedditAlien />
                    </a>

                    <a href="" className="icon-link twitter-icon">
                        <FaTwitter />
                    </a>

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