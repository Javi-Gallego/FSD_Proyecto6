import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";
import { Header } from "../../common/Header/Header";
import {
  deleteService,
  getServices,
  updateService,
} from "../../services/apiCalls";
import service1 from "../../img/services/1.png";
import service2 from "../../img/services/2.png";
import service3 from "../../img/services/3.png";
import service4 from "../../img/services/4.png";
import service5 from "../../img/services/5.png";
import { Button } from "../../common/Button/Button";
import { CustomAreaText } from "../../common/CustomTextArea/CustomTextArea";

export const Services = () => {
  const navigate = useNavigate();
  const arrayPhotos = [service1, service2, service3, service4, service5];
  const [services, setServices] = useState([]);
  const [disabled, setDisabled] = useState("disabled");
  const [serv, setServ] = useState({
    serviceName: "",
    description: "",
  });

  useEffect(() => {
    if (services.length === 0) {
      fetchServices();
    }
  }, []);

  const fetchServices = async () => {
    try {
      const newServices = await getServices();
      setServices(newServices);
    } catch (error) {
      console.log(error);
    }
  };
  const inputHandler = (e, key) => {
    console.log(e.value);
    setServ((prevState) => ({
      ...prevState,
      [e.name]: e.value,
    }));
    setServices(
      services.map((service, index) => {
        if (index === key) {
          return {
            ...service,
            [e.name]: e.value,
          };
        }
        return service;
      })
    );
  };
  const updateDisabled = (id, serviceName, description) => {
    setDisabled(id);
    setServ((prevState) => ({
      ...prevState,
      serviceName: serviceName,
      description: description,
    }));
  };
  const checkError = () => {
    console.log("checkError");
  };
  const changeService = async (serviceId) => {
    try {
      console.log("serv", serv);
      console.log("serviceId", serviceId);
      const updated = await updateService(
        sessionStorage.getItem("token"),
        serv,
        serviceId
      );
      setDisabled("");
    } catch (error) {
      console.log(error);
    }
  };
  const removeService = async (serviceId) => {
    try {
      console.log("serviceId", serviceId);
      await deleteService(sessionStorage.getItem("token"), serviceId);
      const updatedservices = await fetchServices();
      setServ(updatedservices);
    } catch (error) {
      console.log(error);
    }
  };
  const createService = () => {
    navigate("/createService");
  };
  return (
    <>
      <Header />
      <div className="servicesDesign">
        <section className="servicesTablon">
          <div className="separator"></div>
          {sessionStorage.getItem("role") === "super_admin" && (
          <div className="createService">
            <Button
              text="Crear servicio"
              functionClick={createService}
              currentClass="serviceButton"
            />
          </div>)}
          {Array.isArray(services) !== 0 &&
            services.map((service, index) => (
              <article key={index} className="serviceCard">
                <div className="title">
                  <CustomAreaText
                    type="text"
                    name="serviceName"
                    value={service.serviceName.toUpperCase() || ""}
                    disabled={
                      parseInt(disabled) === service.id ? "" : "disabled"
                    }
                    onChangeFunction={(e) => inputHandler(e.target, index)}
                    onBlur={checkError}
                    className={
                      disabled === service.id
                        ? "serviceTitleInput enabledServiceTitleInput"
                        : "serviceTitleInput"
                    }
                  />
                </div>
                <div className="visor">
                  <img src={arrayPhotos[index]}></img>
                </div>
                {/* <div className="description">{service.description}</div> */}
                <div className="description">
                  <CustomAreaText
                    type="text"
                    name="description"
                    value={service.description || ""}
                    disabled={
                      parseInt(disabled) === service.id ? "" : "disabled"
                    }
                    onChangeFunction={(e) => inputHandler(e.target, index)}
                    onBlur={checkError}
                    className={
                      disabled === service.id
                        ? "serviceDescriptionInput enabledServiceDescriptionInput"
                        : "serviceDescriptionInput"
                    }
                  />
                </div>
                {sessionStorage.getItem("role") === "super_admin" && (
                  <div className="adminButtons">
                    <Button
                      text={
                        parseInt(disabled) === service.id ? "Guardar" : "Editar"
                      }
                      functionClick={
                        parseInt(disabled) === service.id
                          ? () => changeService(service.id)
                          : () =>
                              updateDisabled(
                                service.id,
                                service.serviceName,
                                service.description
                              )
                      }
                      currentClass={
                        parseInt(disabled) === service.id
                          ? "serviceButton update"
                          : "serviceButton"
                      }
                    />
                    <Button
                      text="Eliminar"
                      functionClick={() => removeService(service.id)}
                      currentClass="serviceButton"
                    />
                  </div>
                )}
              </article>
            ))}
        </section>
      </div>
    </>
  );
};
