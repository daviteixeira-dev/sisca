import React from "react";
import "./App.css";
import Clientes from "./components/Clientes/Clientes";
import DashboardListClientes from "./components/ListClients/DashboardListClientes";
import Navbar from "./components/Navbar/Navbar";
import Pendentes from "./components/Pendentes/Pendentes";
import Vendas from "./components/Vendas/Vendas";

const App = () => {
  return (
    <section className="App">
      <Navbar />
      <div className="container">
        <div className="leftBoard">
          <DashboardListClientes />
        </div>
        <div className="rightBoard">
          <Clientes />
          <Pendentes />
          <Vendas />
        </div>
      </div>
    </section>
  );
};

export default App;
