import React from "react";
import InfoRow from "../InfoRow/InfoRow";
import "./DashboardInfo.css";
import { FaArrowDown, FaAngleRight, FaAngleLeft } from "react-icons/fa";

const DashboardInfo = () => {
  const array = [
    { name: "Arley Gomes", course: "Design Digital" },
    { name: "Victor Camargo", course: "Ciências da Computação" },
    { name: "Davi Teixeira", course: "Sistemas de Informação" },
    { name: "Aline Araujo", course: "Sistemas de Informação" },
    { name: "Vittor Melo", course: "Sistemas de Informação" },
    { name: "Álex Souza", course: "Engenharia da Computação" },
    { name: "Andreina Mendes", course: "Ciências da Computação" },
    { name: "Douglas Holanda", course: "Sistemas de Informação" },
    { name: "Daniel Vitor", course: "Engenharia da Computação" },
    { name: "Javel Queiroz", course: "Engenharia de Software" },
    { name: "Letícia Farias", course: "Sistemas de Informação" },
    { name: "Gétúlio Macedo", course: "Sistemas de Informação" },
  ];

  return (
    <section className="DashboardInfo">
      <div className="info-titles">
        <h1 className="title">Nome</h1>
        <h1 className="title">Curso</h1>
        <h1
          className="title"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Status <FaArrowDown />
        </h1>
      </div>

      {array.map((element) => (
        <InfoRow customer={element} />
      ))}

      <div className="bottom-info">
        <div className="bottom-info-left">
          <span>Página 1 de 8</span>
        </div>
        <div className="bottom-info-right">
          <button disabled>
            <FaAngleLeft />
          </button>
          <button>
            <FaAngleRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashboardInfo;
