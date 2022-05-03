import React from "react";
import './Clientes.css';
import { FaArrowUp } from 'react-icons/fa';

const Clientes = () => {
    return(
        <section className="Clientes">
            <div className="left-data">
                <span>128</span>
            </div>
            <div className="right-data">
                <h1>Clientes</h1>
                <span><FaArrowUp style={{fontSize: ".6rem", fontWeight: "lighter", marginRight: "3px"}}/> +4</span>
            </div>
        </section>
    );
}

export default Clientes; 