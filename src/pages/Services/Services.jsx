import { useEffect, useState } from "react";
import "./Services.css";
import { Header } from "../../common/Header/Header";
import { getServices } from "../../services/apiCalls";

export const Services = () => {
  const [services, setServices] = useState([]);

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
  return (
    <>
      <Header />
      <section className="servicesDesign">
        <div className="separator"></div>
        {Array.isArray(services) !== 0 &&
          services.map((service, index) => (
            <article key={index} className="container">
              <div className="title">{service.serviceName}</div>
              <div className="separator"></div>
              <div className="description">{service.description}</div>
              <div className="separator"></div>
              <div className="separator"></div>
            </article>
          ))}
      </section>
    </>
  );
};
