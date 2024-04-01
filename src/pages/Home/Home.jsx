import { Header } from "../../common/Header/Header";
import Logo from "../../img/logo.png";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="homeDesign">
        <div className="leftColumn">
        <img src={Logo} alt="Inkspire"></img>
          </div>
        <div className="rightColumn">
          <h1>
            INKSPIRE ¿NOS TATUAMOS?
          </h1>
        </div>
      </div>
    </>
  );
};
