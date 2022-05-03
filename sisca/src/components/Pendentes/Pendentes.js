import React from "react";
import './Pendentes.css';
import { FaArrowDown } from 'react-icons/fa';

const Pendentes = () => {
    return(
        <section className="Pendentes">
            <div className="left-data">
                <span>15</span>
            </div>
            <div className="right-data">
                <h1>Pendentes</h1>
                <span><FaArrowDown style={{fontSize: ".6rem", fontWeight: "lighter", marginRight: "3px"}}/> -6</span>
            </div>
        </section>
    );
}

export default Pendentes;