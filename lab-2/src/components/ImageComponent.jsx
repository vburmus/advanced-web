import React, {useState} from 'react';
import "../styles/css/image-container.css"
import image1 from '../assets/villa1.jpg';
import image2 from '../assets/villa2.jpg';
import image3 from '../assets/villa3.jpg';
import {ArrowLeft, ArrowRight} from "react-bootstrap-icons"

const ImageComponent = () => {
    const [imagesArray] = useState([image1, image2, image3]);
    const [prices, setPrices] = useState(["500$", "1200$", "1500$"])
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextClick = () => {
        setCurrentIndex(currentIndex+1);
    }

    const handlePreviousClick = () => {
        setCurrentIndex(currentIndex-1);
    }

    return (
        <div className="image-container">
            <h2>Our best villas from 500$</h2>
            <img
                src={imagesArray[currentIndex]}
                alt="villa"
            />
            <div className="button-container">
                <button
                    disabled={currentIndex === 0}
                    className={currentIndex === 0 ? 'inactive-button' : 'active-button'}
                    onClick={() => handlePreviousClick()}> <ArrowLeft size={20}/> </button>
                <button
                    disabled={currentIndex === imagesArray.length - 1}
                    className={currentIndex === imagesArray.length - 1 ? 'inactive-button' : 'active-button'}
                    onClick={() => handleNextClick()}> <ArrowRight size={20}/> </button>
            </div>
            <h2 style={{marginTop: 25, marginBottom: 25}}>{prices[currentIndex]} for night</h2>
            <button className="active-button" style={{fontSize: 18}}>Book Now!</button>
        </div>
    );
};

export default ImageComponent;