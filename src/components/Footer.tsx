import "../css/footer.css";
import footer from "../assets/logo.png";
import insta from "../assets/insta.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
  return (
    <div className="fotterwrapper">
      <div className="fottercontainer">
        <div className="footercontent">
          <img src={footer} alt="" />
          <p> Contactos e política de provacidade</p>
          <div className="icons">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="icon" className="icon" />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} alt="icon" className="icon" />
            </a>
          </div>
        </div>
        <p className="allrights">
          2023 Restaurante Senhor Zeferino
        </p>
      </div>
    </div>
  );
};

export default Footer;
