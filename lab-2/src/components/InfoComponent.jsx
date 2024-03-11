import React, {useState} from 'react';
import "../styles/css/info-component.css"
import dogImg from "../assets/dog.png"
import luxuryImg from "../assets/luxury.png"
import beachImg from "../assets/beach.png"
import winterImg from "../assets/winter.png"

const InfoComponent = () => {
    const [images, setImages] = useState([dogImg, luxuryImg, beachImg, winterImg])

    return (
        <div className="info-container">
            <div className="about-section">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Eu nisl nunc mi ipsum faucibus vitae aliquet.
                    Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices.
                    Euismod in pellentesque massa placerat duis ultricies lacus.
                </p>
                <button>Book Now!</button>
            </div>
            <div className="images-container">
                {images.map((img) => (
                    <div className="fluid-img">
                        <img src={img} alt="info img"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfoComponent;