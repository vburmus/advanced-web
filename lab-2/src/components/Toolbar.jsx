import React from 'react';
import "../styles/css/toolbar.css"
import {List} from "react-bootstrap-icons"

const Toolbar = () => {
    return (
        <div className="villas-toolbar">
            <img src="/logo.png" alt="logo" width="100px" height="100px"/>
            <h1>Best Villas</h1>
            <List size={35}/>
        </div>
    );
};

export default Toolbar;