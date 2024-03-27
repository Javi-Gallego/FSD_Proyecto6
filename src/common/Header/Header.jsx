import { HeaderLink } from "../HeaderLink/HeaderLink"
import { LogoutLink } from "../LogoutLink/LogoutLink"
import "./Header.css"

export function Header() {
  return (
    <div className="headerDesign">
      {sessionStorage.getItem("auth") === "true" 
        ? (
        <>
          <HeaderLink title="Home" destination="/" />
          <HeaderLink title="Servicios" destination="/services" />
          <HeaderLink title="Catalogo" destination="/catalog" />
          <HeaderLink
            title={sessionStorage.getItem("firstName")}
            destination="/profile" />
          {sessionStorage.getItem("role") === "super_admin"
           ? (
            <HeaderLink title="Citas" destination="/adminappointments" />
           )
            : ( sessionStorage.getItem("role") === "tattoo_artist"
                ? (
                  <HeaderLink title="Trabajos" destination="/artistappointments" />
                )
                : (
                  <HeaderLink title="Citas" destination="/Appointments" />
                )
            )
          }
          {sessionStorage.getItem("role") === "super_admin" &&
            <HeaderLink title="Users" destination="/users" />
          }
          <LogoutLink title="logout" />
        </>
      ) : (
        <>
          <HeaderLink title="Home" destination="/" />
          <HeaderLink title="Servicios" destination="/services" />
          <HeaderLink title="Catalogo" destination="/catalog" />
          <HeaderLink title="Register" destination="/register" />
          <HeaderLink title="Login" destination="/login" />
        </>
      )}
    </div>
  )
}
