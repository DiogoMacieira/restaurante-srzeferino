import "../css/formmenu.css";
import logoform from "../assets/logoform.png";
import React, { useEffect } from "react";
const Form = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <div className="formbody">
      <h2>Dados do pedido:</h2>
      <div className="form">
        <div className="formleft">
          <input type="text" placeholder="Nome:" />
          <input type="text" placeholder="Email:" />
          <input type="text" placeholder="Telefone:+351" />
          <input type="text" placeholder="Localidade:" />
          <input type="text" placeholder="Código Postal:" />
          <input type="text" placeholder="Distrito:" />
        </div>
        <div className="image-container">
        <img src={logoform} alt="Logo"  className="logo-img"  />
      </div>
      </div>
      <div className="final">
        <button className="btnfinal">FINALIZAR</button>
      </div>
    </div>
  );
};

export default Form;
 