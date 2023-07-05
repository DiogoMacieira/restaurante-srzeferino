import React, { useEffect } from "react";
import "../css/home.css";
import menu1 from "../assets/menu1.png";
import menu2 from "../assets/menu2.png";
import menu3 from "../assets/menu3.png";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <div className="homewrapper">
      <div className="homepage">
        <h1 className="title">Restaurante Sr Zeferino</h1>
        <p className="subtitle">Venha almoçar connosco!</p>
      </div>
      <div className="titlecards">
        <h2>Os nossos Menus!</h2>
      </div>
      <div className="cardwrapper">
        <div className="card umcard">
          <div className="imgdiv">
            <img src={menu1} alt="img3" />
          </div>
          <h4 className="h41">Menu Infantil</h4>
          <p className="cardp">
            Este menu é destinado aos nossos clientes mais pequenos! <br /> -
            Hamburger pequeno <br /> - Bebida pequena <br /> - Mini sobremesa
            <br /> Preço: 7,50€
          </p>
        </div>
        <div className="card doiscard">
          <div className="imgdiv">
            <img src={menu2} alt="img3" />
          </div>
          <h4 className="h42">Menu Normal</h4>
          <p className="cardp">
            Este menu serve para qualquer um! <br /> - Hamburger <br /> - Bebida
            <br /> - Sobremesa <br /> Preço: 9,50€
          </p>
        </div>
        <div className="card trescard">
          <div className="imgdiv">
            <img src={menu3} alt="img3" />
          </div>
          <h4 className="h43">Menu Gigante</h4>
          <p className="cardp">
            Este menu é destinado aos nossos clientes que gostam de um desafio!
            <br /> - Hamburger Gigante <br /> - Bebida Gigante <br /> -
            Sobremesa Gigante <br /> Preço: 14,50€
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
