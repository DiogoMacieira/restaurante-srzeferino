import React, { useEffect } from "react";
import "../css/empregados.css";

const Empregados = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
     <div className="container">
      <form>
        <h2 className="login">Login</h2>
        <div className="form-group">
          <label htmlFor="username">Nº Empregado:</label>
          <input type="text" id="username" name="username" placeholder="Insira o seu numero de empregado" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Insira a sua password" required />
        </div>
        <div className="form-group">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Empregados;
