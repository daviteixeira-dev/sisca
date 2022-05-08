import React from "react";
import "./InfoRow.css";
import { FaEllipsisV, FaPlus } from "react-icons/fa";

const InfoRow = (props) => {
  const [status, setStatus] = React.useState(true);
  const [cor, setCor] = React.useState("#e3eafc");
  const [text, setText] = React.useState("#ff5356");

  React.useEffect(() => {
    setCor((state1) => (status ? "#e3eafc" : "#ffe2e0"));
    setText((state2) => (status ? "#1347d3" : "#ff5356"));
  }, [status]);

  return (
    <section className="InfoRow">
      <div>
        <p className="info-name">{props.customer.name}</p>
      </div>
      <div>
        <p className="info-curso">{props.customer.course}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => setStatus((status) => !status)}
          style={{
            background: cor,
            border: "none",
            padding: ".5rem 1rem",
            borderRadius: ".6rem",
            color: text,
          }}
        >
          {status ? "Pago" : "Pendente"}
        </button>
      </div>
      <div>
        <button className="more">
          <FaPlus />
        </button>
      </div>
      <div>
        <button className="ellipsis">
          <FaEllipsisV />
        </button>
      </div>
    </section>
  );
};

export default InfoRow;
