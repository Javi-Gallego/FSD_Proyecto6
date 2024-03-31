import { Header } from "../../common/Header/Header";
import Logo from "../../img/logocuadrado.png";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="homeDesign">
        <img src={Logo} alt="Inkspire"></img>
        <h2>
          ¿Estás interesado en hacerte un tatuaje y quieres asesoramiento?
        </h2>
        <div className="intro">
          En nuestro estudio de tatuaje podrás encontrar todo lo que el mundo
          del tatuaje puede ofrecerte. Revisa nuestro catálogo de tatuajes y, si
          ya tienes claro el diseño que quieres, preséntanoslo. Nuestros
          servicios también incluyen colocación de piercings y dilatadores.
          Regístrate y reserva cita con nosotros.
        </div>
        <h2>¿Eres artista?</h2>
        <div className="intro">
          Y si eres un artista tatuador, puedes registrarte y subir tus trabajos
          para que los usuarios puedan verlos y reservar una cita contigo.
        </div>
      </div>
    </>
  );
};
