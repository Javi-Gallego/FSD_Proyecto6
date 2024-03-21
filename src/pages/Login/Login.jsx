import { useState, useEffect } from "react"
import { AuthButton } from "../../common/AuthButton/AuthButton"
import { AuthInput } from "../../common/AuthInput/AuthInput"
import { Header } from "../../common/Header/Header"
import { useNavigate } from "react-router-dom"
import { decodeToken } from "react-jwt"
import { loginMe } from "../../services/apiCalls"

import "./Login.css"
import { validate } from "../../utils/functions"

export const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  const [userError, setUserError] = useState({
    userNameError: "",
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
  sessionStorage.setItem("auth", false)

  const navigate = useNavigate()

  const inputHandler = (e) => {
    setCredentials((fields) => ({
      ...fields,
      [e.target.name]: e.target.value
    }))
  }

  const logMe = async () => {
    for (let credential in credentials) {
      if (credentials[credential] === "") {
        setMsgError("No has rellenado todos los campos")
        return
      }
    }

    fetched = await loginMe(credentials)

    if (!fetched.success) {
      setMsgError(fetched.message)
      return
    }

    const decoded = decodeToken(fetched.token)
    console.log(decoded)
    console.log(decoded.firstName)
    sessionStorage.setItem("token", fetched.token)
    sessionStorage.setItem("user", JSON.stringify(decoded))
    sessionStorage.setItem("firstName", decoded.firstName)
    sessionStorage.setItem("auth", true)
    navigate("/")
  }

  return (
    <div className="loginDesign">
      <Header />
      <div className="separator"></div>
      <AuthInput
        className={`authInputDesign ${
          userError.userNameError !== "" ? "authInputDesignError" : ""
        }`}
        type="email"
        name="email"
        placeholder="Escribe tu email"
        value={credentials.email || ""}
        onChangeFunction={inputHandler}
        onBlurFunction={checkError}
      />
      <div className="separator"></div>
      <AuthInput
        className={`authInputDesign ${
          userError.userNameError !== "" ? "authInputDesignError" : ""
        }`}
        type="password"
        name="password"
        placeholder="Escribe tu password"
        value={credentials.password || ""}
        onChangeFunction={inputHandler}
        onBlurFunction={checkError}
      />
      <div className="separator"></div>
      <AuthButton
        text="Login"
        functionClick={logMe}
        currentClass="authButtonDesign button-4"
      />
    </div>
  )
}
