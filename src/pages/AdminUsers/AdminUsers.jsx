import { useEffect, useState } from "react";
import { Header } from "../../common/Header/Header";
import "./AdminUsers.css";
import { getUsers } from "../../services/apiCalls";
import { FieldInput } from "../../common/FieldInput/FieldInput";
import { Button } from "../../common/Button/Button";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState(sessionStorage.getItem("token"));
    const [querys, setQuerys] = useState("");
  useEffect(() => {}, [users]);
  const fetchUsers = async () => {
    try {
      const newUsers = await getUsers(token, querys);
      console.log("newUsers", newUsers);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <div className="adminUsersDesign">
        <div className="separator"></div>
        <div className="searchMenu">
          <FieldInput type="text" name="name" placeholder="Name" />
          <FieldInput type="text" name="email" placeholder="Email" />
          <FieldInput type="text" name="role" placeholder="Role" />
          <Button
            text="Buscar"
            functionClick={fetchUsers}
            currentClass="buttonDesign"
          />
        </div>
        <div className="index">
          <div className="id">ID</div>
          <div className="firstName">Nombre</div>
          <div className="lastName">Apellido</div>
          <div className="email">Email</div>
          <div className="role">Role</div>
          <div className="delete"></div>
        </div>
      </div>
    </>
  );
};
