import { useEffect, useState } from "react";
import { Header } from "../../common/Header/Header";
import { FieldInput } from "../../common/FieldInput/FieldInput";
import "./AdminAppointments.css";
import { deleteAppointment, getAppointments } from "../../services/apiCalls";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { useNavigate } from "react-router-dom";
import papelera from "../../img/papelera.png";

export const AdminAppointments = () => {
  const navigate = useNavigate();
  dayjs.locale("es");
  if (sessionStorage.getItem("auth") === "false") {
    navigate("/");
  }
  const [firstFetch, setFirstFetch] = useState(false);
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [appointments, setAppointments] = useState([]);
  const [appointmentDetailsOn, setAppointmentDetailsOn] = useState("");
  const [filters, setFilters] = useState({
    userId: "",
    serviceId: "",
    artistId: "",
    catalogId: "",
    date: "",
  });

  useEffect(() => {
    if (sessionStorage.getItem("auth") === "false") {
      navigate("/");
    }
    if (!firstFetch) {
    }
  }, []);

  useEffect(() => {
    if (!firstFetch) {
      fetchAppointments();
    }
  }, [appointments]);

  const inputHandler = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

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

  const createAppointment = () => {
    navigate("/createappointment");
  };

  const removeAppointment = async (appointmentId) => {
    try {
      await deleteAppointment(token, appointmentId);
      const updatedAppointments = appointments.filter(
        (appointment) => appointment.id !== appointmentId
      );
      setAppointments(updatedAppointments);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <section className="appointmentsDesign">
        <div className="appointmentHeader">
            <div className="filters">
                <div className="filterName">
                    <div>Usuario</div>
                    <FieldInput 
                    />
                </div>
                <div className="filterName">
                    <div>Tatuador</div>
                    <FieldInput />
                </div>
                <div className="filterName">
                    <div>Servicio</div>
                    <FieldInput />
                </div>
            </div>
            <div className="createAppointment" onClick={createAppointment}>
              Crear cita nueva
            </div>
        </div>
        <div className="separator"></div>
        {appointments.length === 0 ? (
          <div className="noAppointments">No hay ninguna cita pendiente</div>
        ) : (
          (() => {
            return Array.isArray(appointments) ? (
              appointments.map((appointment, index) => {
                const date = dayjs(appointment.date).format(
                  "DD MMM YYYY HH:mm"
                );
                return (
                  <article
                    key={index}
                    className={`adminAppointmentCard ${(index % 2 === 0 )? `Dark` : `Light`}`}
                    onClick={() => detailsAppointment(index)}
                  >
                    {appointmentDetailsOn !== index ? (
                      <div className="adminAppointmentCard">
                        <div className="fieldData">
                            <div className="fieldDate">{date}</div>
                            <div className="fieldUser">{`${appointment.user.firstName} ${appointment.user.lastName}`}</div>
                            {appointment.artist && appointment.artistId !== 3 && (
                              <div className="fieldArtist">{appointment.artist.firstName}</div>
                            )}
                        </div>
                        <div
                          className="eliminar"
                          onClick={() => removeAppointment(appointment.id)}
                        >
                          <img src={papelera}></img>
                        </div>
                      </div>
                    ) : (
                      <div className="adminAppointmentCard Selected">
                        <div className="fieldData">
                            <div className="fieldDate">{date}</div>
                            <div className="fieldUser">{`${appointment.user.firstName} ${appointment.user.lastName}`}</div>
                            {appointment.artist && appointment.artistId !== 3 && (
                              <div className="fieldArtist">{appointment.artist.firstName}</div>
                            )}
                        </div>
                        <div
                          className="eliminar"
                          onClick={() => removeAppointment(appointment.id)}
                        >
                          <img src={papelera}></img>
                        </div>

                        <div className="fieldService">{appointment.service.serviceName}</div>
                        {appointment.catalog && appointment.catalogId !== 1 && (
                          <div>
                            <div className="fieldService">Tatuaje: {appointment.catalog.tattooName}</div>
                            <img src={appointment.catalog.urlImage}></img>
                          </div>
                        )}
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
