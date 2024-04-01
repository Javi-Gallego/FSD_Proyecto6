import { Header } from "../../common/Header/Header";
import Logo from "../../img/logo.png";
import Logonombre from "../../img/logonombre.png";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="homeDesign">
        <div className="leftColumn">
        <img src={Logonombre} alt="Inkspire"></img>
          </div>
        <div className="rightColumn">
          <h1>
            ¿NOS TATUAMOS?
          </h1>
        </div>
      </div>
    </>
  );
};
