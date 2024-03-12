import React from 'react';
import "../styles/css/footer.css"

const Footer = () => {
    return (
        <div className="villas-footer">
            <div className="about-us">
                <h3>About us</h3>
                <div className="list">
                    <a href="#">Policy</a>
                    <a href="#">Company</a>
                    <a href="#">Complaints</a>
                </div>
            </div>
            <div className="logo-container">
                <h1>Best Villas</h1>
                <div className="logo">
                    <img src="logo.png"/>
                </div>
            </div>
            <div className="contact">
                <h3>Contact links</h3>
                <div className="list">
                    <a href="#">Instagram</a>
                    <a href="#">Gmail</a>
                    <a href="#">Facebook</a>
                </div>
            </div>

        </div>
    );
};

export default Footer;