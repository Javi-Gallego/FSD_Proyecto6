import { useState } from "react"
import { AuthButton } from "../../common/AuthButton/AuthButton"
import { AuthInput } from "../../common/AuthInput/AuthInput"
import { Header } from "../../common/Header/Header"
import { registerMe } from "../../services/apiCalls"
import "./Register.css"
import { useNavigate } from "react-router-dom"
import { validate } from "../../utils/functions"

export const Register = () => {
  const navigate = useNavigate()

  const [credentials, setCredentials] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  })

  const [userError, setUserError] = useState({
    first_nameError: "",
    last_nameError: "",
    emailError: "",
    passwordError: ""
  })

  const [msgError, setMsgError] = useState("")

  const checkError = (e) => {
    const error = validate(e.target.name, e.target.value)

    setUserError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error
    }))
  }

  let fetched = {}

  const inputHandler = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const regUser = async () => {
    for (let credential in credentials) {
      if (credentials[credential] === "") {
        setMsgError("No has rellenado todos los campos")
        return
      }
    }

    fetched = await registerMe(credentials)

    if (!fetched.success) {
      setMsgError(fetched.message)
      return
    }

    navigate("/registerSuccess")
  }

  return (
    <>
      <Header />
      <div className="registerDesign">
        <div className="separator"></div>
        <AuthInput
          className={`authInputDesign ${
            userError.first_nameError !== "" ? "authInputDesignError" : ""
          }`}
          type="first_name"
          name="first_name"
          placeholder="Escribe tu nombre"
          value={credentials.first_name || ""}
          onChangeFunction={inputHandler}
          onBlurFunction={checkError}
        />
        <div className="error">{userError.first_nameError}</div>
        <AuthInput
          className={`authInputDesign ${
            userError.last_nameError !== "" ? "authInputDesignError" : ""
          }`}
          type="last_name"
          name="last_name"
          placeholder="Escribe tu nombre"
          value={credentials.last_name || ""}
          onChangeFunction={inputHandler}
          onBlurFunction={checkError}
        />
        <div className="error">{userError.last_nameError}</div>        
        <AuthInput
          className={`authInputDesign ${
            userError.emailError !== "" ? "authInputDesignError" : ""
          }`}
          type="email"
          name="email"
          placeholder="Escribe tu email"
          value={credentials.email || ""}
          onChangeFunction={inputHandler}
          onBlurFunction={checkError}
        />
        <div className="error">{userError.emailError}</div>
        <AuthInput
          className={`authInputDesign ${
            userError.passwordError !== "" ? "authInputDesignError" : ""
          }`}
          type="password"
          name="password"
          placeholder="Escribe tu password"
          value={credentials.password || ""}
          onChangeFunction={inputHandler}
          onBlurFunction={checkError}
        />
        <div className="error">{userError.passwordError}</div>
        <AuthButton
          text="Register"
          functionClick={regUser}
          currentClass="authButtonDesign glow-on-hover"
        />
        <div className="error">{msgError}</div>
      </div>
    </>
  )
}
