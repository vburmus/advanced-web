import React from 'react';
import "../styles/css/toolbar.css"
import {List} from "react-bootstrap-icons"

const Toolbar = () => {
    return (
        <div className="villas-toolbar">
            <img src="/logo2.png" alt="logo" width="70px" height="60px"/>
            <h1 style={{'padding-right': 40}}>Best Villas</h1>
            <List size={40}/>
        </div>
    );
};

export default Toolbar;