import React from 'react';
import "../styles/css/description.css"
import {Coin, Gem, Icon9Circle, BrightnessHighFill, PersonCheck} from "react-bootstrap-icons"

const Description = () => {
    return (
        <div className="description-container">
            <div className="icon-container">
                <PersonCheck size={55}/>
                <p>Tailored<br/>Services</p>
            </div>
            <div className="icon-container">
                <BrightnessHighFill size={55}/>
                <p>Various<br/>Places</p>
            </div>
            <div className="icon-container">
                <Icon9Circle size={55}/>
                <p>9/10 <br/>on Booking</p>
            </div>
            <div className="icon-container">
                <Gem size={55}/>
                <p>Handpicked<br/>Selection</p>
            </div>
            <div className="icon-container">
                <Coin size={55}/>
                <p>Secure<br/>Payment</p>
            </div>
        </div>
    );
};

export default Description;