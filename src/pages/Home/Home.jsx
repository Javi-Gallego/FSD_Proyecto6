import { Header } from "../../common/Header/Header"
import Logo from "../../img/logocuadrado.png"
import "./Home.css"

export const Home = () => {
  return (
    <>
      <Header />
      <div className="homeDesign">
        <img src={Logo} alt="Inkspire"></img>
      </div>
    </>
    
  )
}
