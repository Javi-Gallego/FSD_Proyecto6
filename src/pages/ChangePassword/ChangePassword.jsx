import { useState } from "react"
import { Button } from "../../common/Button/Button"
import { FieldInput } from "../../common/FieldInput/FieldInput"
import "./ChangePassword.css"
import { validate } from "../../utils/functions"
import { Header } from "../../common/Header/Header"

export const ChangePassword = () => {
  const [bodyPassword, setBodyPassword] = useState({
    password: "",
    password1: ""
  })

  const inputHandler = (e) => {
    setBodyPassword((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const checkError = (e) => {
    const error = validate(e.target.name, e.target.value)

    setProfileError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error
    }))
  }

  const changePass = async () => {
    try {
      const updatedPass = await changePassword(bodyPassword)
    } catch (error) {}
  }

  return (
    <>
      <Header />
      <div className="changePassword">
        <h1>Cambio de password</h1>
        <p>Intruduzca el nuevo password</p>
        <FieldInput
          type="password"
          name="password"
          value=""
          disabled=""
          onChangeFunction={inputHandler}
          onBlur={checkError}
          className="fieldInputDesign"
        />
        <p>Repita el nuevo password</p>
        <FieldInput
          type="password"
          name="password1"
          value=""
          disabled=""
          onChangeFunction={inputHandler}
          onBlur={checkError}
          className="fieldInputDesign"
        />
        <p>Intruduzca el password actual</p>
        <FieldInput
          type="password"
          name="password2"
          value=""
          disabled=""
          onChangeFunction={inputHandler}
          onBlur={checkError}
          className="fieldInputDesign"
        />
        <Button
          text="Cambiar"
          functionClick={changePass}
          currentClass="buttonDesign"
        />
      </div>
    </>
  )
}
