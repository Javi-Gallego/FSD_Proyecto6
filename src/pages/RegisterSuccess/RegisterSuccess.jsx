import { useEffect } from "react";
import "./RegisterSuccess.css";
import { useNavigate } from "react-router-dom";

export const RegisterSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 4000);
  }, []);

  return (
    <div className="registerSuccessDesign">
      <div className="registerTitle">Registro completado</div>
    </div>
  );
};
