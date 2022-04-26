import React from 'react';
import DashboardInfo from '../DashboardInfo/DashboardInfo';
import "./DashboardListClientes.css"

const DashboardListClientes = () => {
    return (
        <section className='DashboardListClientes'>
            
            <form>
                <label htmlFor="">Clientes</label>
                <input type="search" name="search" id="search" placeholder='Pesquisar' />
                <button>+ Novo Cliente</button>
            </form>

            <DashboardInfo />

        </section>
    );
}

export default DashboardListClientes;