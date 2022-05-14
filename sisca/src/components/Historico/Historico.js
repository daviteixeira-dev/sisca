import React from 'react';
import './Historico.css';
import { FaExpandAlt } from "react-icons/fa";

const Historico = () => {
    return (
        <section className='Historico'>
            <form>
                <label htmlFor="">Historico</label>
                <input type="search" name="search" id="search" placeholder='Pesquisar' />
                <button><FaExpandAlt /></button>
            </form>

        </section>
    );
}

export default Historico;