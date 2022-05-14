import React from "react";
import "./App.css";
import Clientes from "./components/Clientes/Clientes";
import Historico from "./components/Historico/Historico";
import DashboardListClientes from "./components/ListClients/DashboardListClientes";
import Navbar from "./components/Navbar/Navbar";
import Pendentes from "./components/Pendentes/Pendentes";
import Vendas from "./components/Vendas/Vendas";
import Crescimento from "./components/Crescimento/Crescimento";
import GanhosMensais from "./components/GanhosMensais/GanhosMensais";

const App = () => {
  return (
    <section className="App">
      <Navbar />
      <div className="container">
        <div className="leftBoard">
          <DashboardListClientes />
        </div>

        <div className="rightBoard">
          <div className="top">
            <Clientes />
            <Pendentes />
            <Vendas />
          </div>
          <div className="graficos">
            <Crescimento />
            <GanhosMensais />
          </div>
          <div className="bottom">
            <Historico />
          </div>
        </div>

      </div>
    </section>
  );
};

export default App;
