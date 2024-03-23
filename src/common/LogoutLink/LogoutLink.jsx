import "./LogoutLink.css"
import { useNavigate } from "react-router-dom"

export const LogoutLink = ({ title }) => {
  const navigate = useNavigate()

  const logoutMe = () => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("user")
    sessionStorage.removeItem("role")
    sessionStorage.removeItem("firstName")
    sessionStorage.setItem("auth", false)

    navigate("/login")
  }

  return (
    <div className="logoutDesign" onClick={logoutMe}>
      {title}
    </div>
  )
}
