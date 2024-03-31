import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { Profile } from "../Profile/Profile";
import { ChangePassword } from "../ChangePassword/ChangePassword";
import { Appointments } from "../Appointments/Appointments";
import { CreateAppointment } from "../CreateAppointment/CreateAppointment";
import { Services } from "../Services/Services";
import { Catalog } from "../Catalog/Catalog";
import { AdminAppointments } from "../AdminAppointments/AdminAppointments";
import { AdminUsers } from "../AdminUsers/AdminUsers";
import { CreateService } from "../CreateService/CreateService";

export const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/createappointment" element={<CreateAppointment />} />
      <Route path="/adminappointments" element={<AdminAppointments />} />
      <Route path="/adminusers" element={<AdminUsers />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/services" element={<Services />} />
      <Route path="/createservice" element={<CreateService />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
};
