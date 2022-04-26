import React from "react";
import InfoRow from "../InfoRow/InfoRow";
import "./DashboardInfo.css";
import { FaArrowDown, FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const DashboardInfo = () => {
  return (
    <section className="DashboardInfo">
      <div className="info-titles">
        <h1 className="title">Nome</h1>
        <h1 className="title">Curso</h1>
        <h1 className="title" style={{ display: "flex", justifyContent: "center"}}>Status <FaArrowDown /></h1>
      </div>
      <InfoRow />
      <InfoRow />
      <InfoRow />
      <InfoRow />
      <InfoRow />
      <InfoRow />
      <InfoRow />
      <InfoRow />
      <InfoRow />
      <InfoRow />
      <InfoRow />
      <InfoRow />
      <div className="bottom-info">
        <div className="bottom-info-left">
          <span>Página 1 de 8</span>
        </div>
        <div className="bottom-info-right">
          <button disabled><FaAngleLeft /></button>
          <button><FaAngleRight /></button>
        </div>
      </div>
    </section>
  );
};

export default DashboardInfo;
