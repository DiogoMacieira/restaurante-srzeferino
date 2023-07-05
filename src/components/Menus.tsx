import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "../css/menus.css";
import menu1 from "../assets/menu1.png";
import menu2 from "../assets/menu2.png";
import menu3 from "../assets/menu3.png";
import menu4 from "../assets/menu4.png";
import menu5 from "../assets/menu5.png";
import menu6 from "../assets/menu6.png";
const Menus = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <div className="menubody">
      <div className="menutittle">
        <h1>Os Nossos Menus</h1>
      </div>
      <div className="menuitemscontainer">
        <div className="menuitems">
          <div className="forthesquare">
            <div className="item um">
              <div className="imgdiv">
                <img src={menu1} alt="book" />
              </div>
              <div className="item-content">
                <h2>Bifana no pão</h2>
                <p>
                  - Bifina no pão <br />- Bebida média
                </p>
                <Link to="/formmenu">
                  <button className="menubtn">ADICIONAR</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="item dois">
            <div className="imgdiv">
              <img src={menu2} alt="book"  />
            </div>
            <div className="item-content">
              <h2>Hamburguer no pão</h2>
              <p>
                - Hamburguer no pão <br />- Bebida média
              </p>
              <Link to="/formmenu">
                <button className="menubtn">ADICIONAR</button>
              </Link>
            </div>
          </div>
          <div className="item tres">
            <div className="imgdiv">
              <img src={menu3} alt="book"  />
            </div>
            <div className="item-content">
              <h2>Prego no pão</h2>
              <p>
                - Prego no pão <br />- Bebida média
              </p>
              <Link to="/formmenu">
                <button className="menubtn">ADICIONAR</button>
              </Link>
            </div>
          </div>
          <div className="item quatro">
            <div className="imgdiv">
              <img src={menu4} alt="book" />
            </div>
            <div className="item-content">
              <h2>Bifana da casa</h2>
              <p>
                - Bifana da casa <br />- Bebida média
              </p>
              <Link to="/formmenu">
                <button className="menubtn">ADICIONAR</button>
              </Link>
            </div>
          </div>
          <div className="item cinco">
            <div className="imgdiv">
              <img src={menu5} alt="book"  />
            </div>
            <div className="item-content">
              <h2>Hamburguer da casa</h2>
              <p>
                - Hamburguer da casa <br />- Bebida média
              </p>
              <Link to="/formmenu">
                <button className="menubtn">ADICIONAR</button>
              </Link>
            </div>
          </div>
          <div className="item seis">
            <div className="imgdiv">
              <img src={menu6} alt="book"  />
            </div>
            <div className="item-content">
              <h2>Prego da casa</h2>
              <p>
                - Prego da casa <br />- Bebida média
              </p>
              <Link to="/formmenu">
                <button className="menubtn">ADICIONAR</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
