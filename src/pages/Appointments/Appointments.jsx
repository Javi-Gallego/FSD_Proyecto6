import { useEffect, useState } from "react";
import { Header } from "../../common/Header/Header";
import "./Appointments.css";
import { deleteAppointment, getAppointments } from "../../services/apiCalls";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { DateTimePicker } from "@mantine/dates";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import papelera from "../../img/papelera.png";

export const Appointments = () => {
  const navigate = useNavigate();
  dayjs.locale("es");
  if (sessionStorage.getItem("auth") === "false") {
    navigate("/");
  }
  let cont = 0;
  const [firstFetch, setFirstFetch] = useState(false);
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [appointments, setAppointments] = useState([]);
  const [appointmentDetailsOn, setAppointmentDetailsOn] = useState("");
  const [detailsCreateAppointmentOff, setDetailsCreateAppointmentOff] =
    useState(true);
  const [filters, setFilters] = useState({
    date: "",
    status: "",
  });

  useEffect(() => {
    if (!firstFetch) {
    }
  }, []);

  useEffect(() => {
    if (!firstFetch) {
      fetchAppointments();
    }
  }, [appointments]);

  const fetchAppointments = async () => {
    try {
      const newappointments = await getAppointments(token, filters);
      setAppointments(newappointments);
      setFirstFetch(true);
    } catch (error) {}
  };

  const detailsAppointment = (index) => {
    if (appointmentDetailsOn === index) {
      setAppointmentDetailsOn("");
      return;
    }
    setAppointmentDetailsOn(index);
  };

  const detailsCreateAppointment = () => {
    setDetailsCreateAppointmentOff(false);
  };
  const createAppointment = () => {
    navigate("/createappointment");
  };

  const removeAppointment = async (appointmentId) => {
    try {
      await deleteAppointment(token, appointmentId);
      const updatedAppointments = appointments.filter( appointment => appointment.id !== appointmentId);
      setAppointments(updatedAppointments);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header />
      <section className="appointmentsDesign">
        <article className="createAppointment" onClick={createAppointment}>
          Crear cita nueva
        </article>
        <div className="separator"></div>
        {appointments.length === 0 ? (
          <div className="noAppointments">No hay ninguna cita pendiente</div>
        ) : (
          (() => {
            return Array.isArray(appointments) ? (
              appointments.map((appointment, index) => {
                const date = dayjs(appointment.date).format(
                  "DD MMM YYYY HH:MM"
                );
                return (
                  <article
                    key={index}
                    className="appointmentCard"
                    onClick={() => detailsAppointment(index)}
                  >
                    {appointmentDetailsOn !== index ? (
                      <div>{date}</div>
                    ) : (
                      <div>
                        <div>{date}</div>
                        <div>{appointment.service.serviceName}</div>
                        {appointment.artist && (
                          <div>Tatuador: {appointment.artist.firstName}</div>
                        )}
                        {appointment.catalog && (
                          <div>
                            <div>Tatuaje: {appointment.catalog.tattooName}</div>
                            <img src={appointment.catalog.urlImage}></img>
                          </div>
                        )}
                        <div className="eliminar" onClick={() => removeAppointment(appointment.id)}>
                          <img src={papelera}></img>
                        </div>
                      </div>
                      
                    )}
                  </article>
                );
              })
            ) : (
              <div>no es array</div>
            );
          })()
        )}
      </section>
    </>
  );
};
