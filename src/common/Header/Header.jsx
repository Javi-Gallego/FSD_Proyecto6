import { HeaderLink } from "../HeaderLink/HeaderLink";
import { LogoutLink } from "../LogoutLink/LogoutLink";
import "./Header.css";
import logo from "../../img/logo.png";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate()
  const goHome = () => {
    navigate("/")
  }
  return (
    <div className="headerDesign">
      {sessionStorage.getItem("auth") === "true" ? (
        <>
          <div className="Header">
            <div className="HeaderLeft">
              <HeaderLink title="Servicios" destination="/services" />
              <HeaderLink title="Catalogo" destination="/catalog" />
            </div>
            <div className="HeaderCenter">
              <div className="logo" onClick={goHome}>
                <img src={logo}></img>
              </div>
            </div>
            <div className="HeaderRight">
              {sessionStorage.getItem("role") !== "super_admin" && (
                <HeaderLink
                title={sessionStorage.getItem("firstName")}
                destination="/profile"
              />)}
              {sessionStorage.getItem("role") === "super_admin" ? (
                <HeaderLink title="Citas" destination="/adminappointments" />
              ) : sessionStorage.getItem("role") === "tattoo_artist" ? (
                <HeaderLink
                  title="Trabajos"
                  destination="/artistappointments"
                />
              ) : (
                <HeaderLink title="Citas" destination="/appointments" />
              )}
              {sessionStorage.getItem("role") === "super_admin" && (
                <HeaderLink title="Usuarios" destination="/adminusers" />
              )}
              <LogoutLink title="logout" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="Header">
            <div className="HeaderLeft">
              <HeaderLink title="Servicios" destination="/services" />
              <HeaderLink title="Catalogo" destination="/catalog" />
            </div>
            <div className="HeaderCenter">
              <div className="logo" onClick={goHome}>
                <img src={logo}></img>
              </div>
            </div>
            <div className="HeaderRight">
              <HeaderLink title="Register" destination="/register" />
              <HeaderLink title="Login" destination="/login" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
