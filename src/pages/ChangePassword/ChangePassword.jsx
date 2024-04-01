import { useState } from "react";
import { Button } from "../../common/Button/Button";
import { FieldInput } from "../../common/FieldInput/FieldInput";
import "./ChangePassword.css";
import { validate } from "../../utils/functions";
import { Header } from "../../common/Header/Header";
import { updateProfile } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

export const ChangePassword = () => {
  
    if (sessionStorage.getItem("auth") === "false") {
    navigate("/");
  }

  const navigate = useNavigate();

  const [bodyPassword, setBodyPassword] = useState({
    newPass: "",
    repeatPass: "",
    currentPass: "",
  });

  const [bodyPasswordError, setBodyPasswordError] = useState({
    newPassError: "",
    repeatPassError: "",
    currentPassError: "",
  });

  const [updatedOK, setUpdatedOK] = useState(false);

  const inputHandler = (e) => {
    setBodyPassword((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkError = (e) => {
    const error = validate(e.target.name, e.target.value);

    setBodyPasswordError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  const changePass = async () => {
    try {
      const token = sessionStorage.getItem("token");

      if (bodyPassword.newPass !== bodyPassword.repeatPass) {
        return;
      }
      const toChangePass = {
        newPass: bodyPassword.newPass,
        currentPass: bodyPassword.currentPass,
      };
      const hola = JSON.stringify(toChangePass);
      const updatedPass = await updateProfile(token, toChangePass);
      setUpdatedOK(true);

      setTimeout(() => {
        navigate("/profile");
      }, 2000);

      navigate("/profile");
    } catch (error) {}
  };

  return (
    <>
      <Header />
      <div className="changePasswordDesign">
        <div className="changePassCard">
          <div className="changeTitle">
            {updatedOK
              ? "El cambio de password ha sido exitoso"
              : ""}
          </div>
          <div className="changeText">Intruduzca el nuevo password</div>
          <FieldInput
            type="password"
            name="newPass"
            value={bodyPassword.newPass || ""}
            disabled=""
            onChangeFunction={inputHandler}
            onBlur={checkError}
            className="fieldInputDesign enabledInput"
          />
          <div className="changeText">Repita el nuevo password</div>
          <FieldInput
            type="password"
            name="repeatPass"
            value={bodyPassword.repeatPass || ""}
            disabled=""
            onChangeFunction={inputHandler}
            onBlur={checkError}
            className="fieldInputDesign enabledInput"
          />
          <div className="changeText">Intruduzca el password actual</div>
          <FieldInput
            type="password"
            name="currentPass"
            value={bodyPassword.currentPass || ""}
            disabled=""
            onChangeFunction={inputHandler}
            onBlur={checkError}
            className="fieldInputDesign enabledInput"
          />
          <div className="separator"></div>
          <Button
            text="Cambiar"
            functionClick={changePass}
            currentClass="buttonDesign"
          />
        </div>
      </div>
    </>
  );
};
