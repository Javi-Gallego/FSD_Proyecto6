import { useEffect, useState } from "react";
import { Header } from "../../common/Header/Header";
import "./Appointments.css";
import { getAppointments } from "../../services/apiCalls";
import dayjs from "dayjs";

export const Appointments = () => {
  if (sessionStorage.getItem("auth") === "false") {
    navigate("/");
  }
  let cont = 0;
  const [firstFetch, setFirstFetch] = useState(false);
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [appointments, setAppointments] = useState([]);
  const [appointmentDetailsOff, setAppointmentDetailsOff] = useState(true);
  const [detailsCreateAppointmentOff, setDetailsCreateAppointmentOff] =
    useState(true);
  const [filters, setFilters] = useState({
    date: "",
    status: "",
  });

  useEffect(() => {
    if (!firstFetch) {
      //   fetchAppointments();
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
      //   if (cont === 0) {
      //     newappointments.map((appointment) => {
      //       setAppointments(appointments.push(appointment));
      //     });
      //     cont++;
      //   }
      setAppointments(newappointments);
      setFirstFetch(true);
      console.log(appointments);
      console.log("newappointments array?", Array.isArray(newappointments));
      console.log("appointments array?", Array.isArray(appointments));
    } catch (error) {}
  };

  const detailsAppointment = () => {
    setAppointmentDetailsOff(!appointmentDetailsOff);
  };

  const detailsCreateAppointment = () => {
    setDetailsCreateAppointmentOff(!detailsCreateAppointmentOff);
  };

  return (
    <>
      <Header />
      <article className="appointmentsDesign">
        <div className="createAppointment" onClick={detailsCreateAppointment}>
          Crear cita nueva
          {!detailsCreateAppointmentOff &&
          <div> Aqui las cosas para crear una cita</div>
          }
        </div>
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
                  <div key={index} className="appointmentCard" onClick={detailsAppointment}>
                    {appointmentDetailsOff ? (
                      <div>{date}</div>
                    ) : (
                      <div>Aquí hay muchos detalles</div>
                    )}
                  </div>
                );
              })
            ) : (
              <div>no es array</div>
            );
          })()
        )}
      </article>
    </>
  );
};
