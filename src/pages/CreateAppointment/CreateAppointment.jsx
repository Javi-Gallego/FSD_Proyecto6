import "./CreateAppointment.css";
import { useState } from "react";
import { DateTimePicker } from "@mantine/dates";
import { Button } from "../../common/Button/Button";
import { Header } from "../../common/Header/Header";
import classes from "./CreateAppointment.module.css";

export const CreateAppointment = () => {
  return (
    <>
      <Header />
      <div className="createAppointmentDesign">
        <select>
          <option value="1">Tatuaje personalizado</option>
          <option value="2">Tatuaje de catálogo</option>
          <option value="3">Restauración tatuajes</option>
          <option value="4">Piercing y dilatadores</option>
          <option value="5">Venta piercing y otros artículos</option>
        </select>
        <div className="separator"></div>
        <div className="relative">
          <DateTimePicker
            label="Elige una fecha"
            placeholder="pulsa para elegir fecha"
            popoverPosition="right"
            popoverSize="md"
            classNames={{
              root: classes.root,
              input: classes.input,
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
        <Button text="Crear cita" />
      </div>
    </>
  );
};
