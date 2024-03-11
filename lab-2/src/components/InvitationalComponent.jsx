import React from 'react';
import villaImg from '../assets/villa0.jpg';
import "../styles/css/invitational-component.css"
import Description from "./Description";

const InvitationalComponent = () => {
    return (
        <div className="invitational-container">
            <img src={villaImg} alt="villa" className="invitational-img"/>
            <div className="text-overlay">
                <div>
                    <h1>Explore Best Villas in the World!</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Eu nisl nunc mi ipsum faucibus vitae aliquet. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices.
                        Euismod in pellentesque massa placerat duis ultricies lacus. Fermentum posuere urna nec tincidunt praesent semper.
                        Donec ultrices tincidunt arcu non sodales neque sodales. Urna id volutpat lacus laoreet non curabitur gravida arcu.
                        Adipiscing elit duis tristique sollicitudin. Rhoncus dolor purus non enim praesent.
                        Convallis a cras semper auctor neque vitae tempus quam.
                        Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt.
                        Lacus suspendisse faucibus interdum posuere.
                    </p>
                </div>
                <Description/>
            </div>
        </div>
    );
};

export default InvitationalComponent;