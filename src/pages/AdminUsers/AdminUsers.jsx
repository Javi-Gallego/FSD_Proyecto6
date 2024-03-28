import { useEffect, useState } from "react";
import { Header } from "../../common/Header/Header";
import "./AdminUsers.css";
import { deleteUser, getUsers } from "../../services/apiCalls";
import { FieldInput } from "../../common/FieldInput/FieldInput";
import { Button } from "../../common/Button/Button";
import papelera from "../../img/papelera2.png";
import nextArrowPage from "../../img/nextpage.png";
import prevArrowPage from "../../img/prevpage.png";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [querys, setQuerys] = useState({
    firstName: "",
    email: "",
    role: "",
  });
  const [details, setDetails] = useState(false);

  useEffect(() => {}, [users]);

  useEffect(() => {
    fetchUsers();
  }, [limit, page]);

  const handleLimit = (e) => {
    setLimit(e.target.innerHTML);
  };
  const fetchUsers = async () => {
    try {
      let newQuery = "";
      if (querys.firstName !== "") {
        newQuery += `&firstName=${querys.firstName}`;
      }
      if (querys.email !== "") {
        newQuery += `&email=${querys.email}`;
      }
      if (querys.role !== "") {
        newQuery += `&role=${querys.role}`;
      }
      console.log("newquery",newQuery)
      const newUsers = await getUsers(token, newQuery, limit, page);
      setUsers(newUsers);
    } catch (error) {
      console.log(error);
    }
  };
  const inputHandler = (e) => {
    setQuerys((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const removeUser = async (userId) => {
    try {
      const deleted = await deleteUser(token, userId);
      console.log(deleted);
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.log(error);
    }
  };
  const toggleDetails = () => {
    setDetails(!details);
  };
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (users.length === parseInt(limit)) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <Header />
      <div className="adminUsersDesign">
        <div className="separator"></div>
        <div className="searchMenu">
          <div>
            <div className="tituloSearch">Nombre</div>
            <FieldInput
              type="text"
              name="firstName"
              value={querys.firstName || ""}
              onChangeFunction={inputHandler}
            />
          </div>
          <div>
            <div className="tituloSearch">Email</div>
            <FieldInput
              type="text"
              name="email"
              value={querys.email || ""}
              onChangeFunction={inputHandler}
            />
          </div>
          <div>
            <div className="tituloSearch">Rol</div>
            <FieldInput
              type="text"
              name="role"
              value={querys.role || ""}
              onChangeFunction={inputHandler}
            />
          </div>
          <Button
            text="Buscar"
            functionClick={fetchUsers}
            currentClass="buttonDesign"
          />
        </div>
        <div className="searchOptions">
          <div className="limit">
            Usuarios por página:
            <div className="limitInput" value="5" onClick={handleLimit}>
              5
            </div>
            -
            <div className="limitInput" value="10" onClick={handleLimit}>
              10
            </div>
            -
            <div className="limitInput" value="20" onClick={handleLimit}>
              20
            </div>
          </div>
          <div className="page centerRow">
            <div onClick={prevPage} className="centerRow">
              <img className="pageButton" src={prevArrowPage} />
            </div>
            {`Página: ${page}`}
            <div onClick={nextPage} className="centerRow">
              <img className="pageButton" src={nextArrowPage} />
            </div>
          </div>
        </div>
        <div className="index">
          <div className="id border centerRow">ID</div>
          <div className="firstName border centerRow">Nombre</div>
          <div className="lastName border centerRow">Apellido</div>
          <div className="email border centerRow">Email</div>
          <div className="role border centerRow">Role</div>
          <div className="delete"></div>
        </div>
        <div className="users">
          {Array.isArray(users) !== 0 &&
            users.map((user, index) => (
              <div key={index} className="user" onClick={toggleDetails}>
                <div className="id centerRow">{user.id}</div>
                <div className="firstName centerRow">{user.firstName}</div>
                <div className="lastName centerRow">{user.lastName}</div>
                <div className="email centerRow">{user.email}</div>
                <div className="role centerRow">{user.role.name}</div>
                {user.role.name === "super_admin" ? (
                  <div></div>
                ) : (
                  <div
                    className="delete centerRow"
                    onClick={() => removeUser(user.id)}
                  >
                    <img src={papelera} alt="papelera" />
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
