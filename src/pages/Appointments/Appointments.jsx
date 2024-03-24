import { useEffect, useState } from "react";
import { Header } from "../../common/Header/Header";
import "./Appointments.css";
import { getAppointments } from "../../services/apiCalls";

export const Appointments = () => {
  if (sessionStorage.getItem("auth") === "false") {
    navigate("/");
  }

  const [firstFetch, setFirstFetch] = useState(false);
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [appointments, setAppointments] = useState([]);
  const [filters, setFilters] = useState({
    date: "",
    status: "",
  });

  useEffect(() => {
    if (!firstFetch) {
      fetchAppointments();
    }
  }, []);

  const fetchAppointments = async () => {
    try {
      const newappointments = await getAppointments(token, filters);
      setAppointments(newappointments);
      console.log(newappointments);
    } catch (error) {}
  };

  return (
    <>
      <Header />
      <article className="appointmentsDesign">
        <div className="createAppointment">Crear cita nueva</div>
        {appointments.length === 0 ? (
          <div className="noAppointments">No hay ninguna cita pendiente</div>
        ) : (
          <div className="appointmentsList">Hay citas pendientes</div>
        )}
      </article>
    </>
  );
};
