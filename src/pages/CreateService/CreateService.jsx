import "./CreateService.css";
import { Header } from "../../common/Header/Header";
import { CustomAreaText } from "../../common/CustomTextArea/CustomTextArea";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createService } from "../../services/apiCalls";
import { Button } from "../../common/Button/Button";

export const CreateService = () => {
  const navigate = useNavigate();
  const [service, setService] = useState({
    serviceName: "",
    description: "",
  });
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  const inputHandler = (e) => {
    setService({
      ...service,
      [e.target.name]: e.target.value,
    });
  };
  const checkError = (e) => {};
  const generateService = async () => {
    try {
        console.log(service);
        await createService(sessionStorage.getItem("token"), service);
        navigate("/services");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <div className="createServiceDesign">
        <div className="createServiceCard">
          <div className="title">Crear Servicio</div>
          <div className="fieldName">Título</div>
          <CustomAreaText
            type="text"
            name="serviceName"
            value={service.serviceName || ""}
            disabled=""
            onChangeFunction={inputHandler}
            onBlur={checkError}
            className="serviceCreateTitleInput"
          />
          <div className="fieldName">Descripción</div>
          <CustomAreaText
            type="text"
            name="description"
            value={service.description || ""}
            disabled=""
            onChangeFunction={inputHandler}
            onBlur={checkError}
            className="serviceCreateDescriptionInput"
          />
          <Button
            text="Crear"
            functionClick={generateService}
            currentClass="serviceButton"
          />
        </div>
      </div>
    </>
  );
};
