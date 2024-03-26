import "./CreateAppointment.css";
import { useEffect, useState } from "react";
import { DateTimePicker } from "@mantine/dates";
import { Header } from "../../common/Header/Header";
import classes from "./CreateAppointment.module.css";
import "@mantine/dates/styles.css";
import { AuthButton } from "../../common/AuthButton/AuthButton";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { createAppointment } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

export const CreateAppointment = () => {
  const navigate = useNavigate();
  dayjs.locale("es");
  const needsTattooArtist = [1, 2, 3];
  const needsTattooFromCatalog = [2];

  const [selectedDate, setSelectedDate] = useState("");
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  const [appointment, setAppointment] = useState({
    userId: null,
    serviceId: null,
    artistId: null,
    catalogId: null,
    date: null,
  });

  useEffect(() => {
    if (appointment.date !== selectedDate) {
      handleDate();
    }
  }, [selectedDate]);

  const inputHandler = (e) => {
    setAppointment((prevState) => ({
      ...prevState,
      [e.target.name]: parseInt(e.target.value),
    }));
  };

  const handleDate = () => {
    const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD HH:mm:ss");
    setAppointment((prevState) => ({
      ...prevState,
      date: formattedDate,
    }));
    console.log("handleDate");
  };

  const sendAppointment = async () => {
    const appointmentToSend = Object.fromEntries(
      Object.entries(appointment).filter(([key, value]) => value !== null)
    );
    console.log(JSON.stringify(appointmentToSend));
    try {
      await createAppointment(token, appointmentToSend);
      navigate("/appointments");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(appointment);
  return (
    <>
      <Header />
      <section className="createAppointmentDesign">
        <article>
          <div>Elige un servicio</div>
          <select onChange={inputHandler} name="serviceId">
            <option value="0"></option>
            <option value="1">Tatuaje personalizado</option>
            <option value="2">Tatuaje de catálogo</option>
            <option value="3">Restauración tatuajes</option>
            <option value="4">Piercing y dilatadores</option>
            <option value="5">Venta piercing y otros artículos</option>
          </select>
        </article>
        <div className="separator"></div>
        <div className="relative">
          <DateTimePicker
            label="Elige una fecha"
            placeholder="pulsa para elegir fecha"
            value={selectedDate}
            onChange={setSelectedDate}
            onClose={handleDate}
            popoverPosition="left"
            size="sm"
            popoverSize="sm"
            popoveroffset={5}
            popoverProps={{ withinPortal: false }}
            classNames={{
              root: classes.root,
              input: classes.input,
              inputWrapper: classes.inputWrapper,
              calendarHeader: classes.calendarHeader,
              calendarHeaderControl: classes.calendarHeaderControl,
              calendarHeaderControlIcon: classes.calendarHeaderControlIcon,
              timeWrapper: classes.timeWrapper,
              timeInput: classes.timeInput,
              submitButton: classes.submitButton,
              month: classes.month,
            }}
          />
        </div>
        <div className="separator"></div>
        {needsTattooArtist.includes(parseInt(appointment.serviceId)) && (
          <article>
            <div className="tattooArtist">Elige un tatuador</div>
            <select onChange={inputHandler} name="artistId">
              <option value="00"></option>
              <option value="11">Pedro</option>
              <option value="12">Jose Luis</option>
              <option value="13">Marta</option>
            </select>
          </article>
        )}
        {needsTattooFromCatalog.includes(parseInt(appointment.serviceId)) && (
          <article>
            <div className="tattooArtist">Elige un tatuaje</div>
            <select onChange={inputHandler} name="catalogId">
              <option value="0"></option>
              <option value="2">León</option>
              <option value="3">Tigre</option>
              <option value="4">Mar</option>
            </select>
          </article>
        )}
        <div className="separator"></div>
        <AuthButton
          text="Crear cita"
          functionClick={sendAppointment}
          currentClass="authButtonDesign glow-on-hover"
        />
      </section>
    </>
  );
};
