import React from 'react';
import { FaGithub, FaFacebook, FaRedditAlien, FaTwitter, FaInstagram } from "react-icons/fa";

function ContactPage () {
    return (
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
    );
}

export default ContactPage;