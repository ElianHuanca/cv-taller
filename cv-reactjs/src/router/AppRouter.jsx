import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage,RegisterPage  } from "../auth/index";
import { HomePage } from "../pages/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login, logout } from "../store/auth/authSlice";
import { Principal } from "../pages/Principal";
import { Trabajos } from "../pages/Trabajos";
import { FormTrabajo } from "../pages/FormTrabajo";
import { Perfil } from "../pages/Perfil";
import { MisPostulaciones } from "../pages/MisPostulaciones";
import { Trabajo } from "../pages/Trabajo";
import { Postulacion } from "../pages/Postulacion";
import { FormEntrevista } from "../pages/FormEntrevista";

export const AppRouter = () => {  
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      dispatch(logout());
    } else {
      dispatch(login({ id: user.id, nombre: user.nombre}));
    }    
  }, [status]);

  const PrivateRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    );
  };

  const PublicRoutes = () => {
    return (
      <Routes>
        <Route path="/auth/register" element={ <RegisterPage />} />
        <Route path="/principal" element={ <Principal />} />
        <Route path="/ofertas" element={ <Trabajos />} />
        <Route path="/oferta" element={ <Trabajo />} />
        <Route path="/crearTrabajo" element={ <FormTrabajo />} />
        <Route path="/perfil" element={ <Perfil />} />
        <Route path="/crearEntrevista" element={ <FormEntrevista />} />
        <Route path="/postulaciones" element={ <MisPostulaciones />} />
        <Route path="/postulacion" element={ <Postulacion />} />
        <Route path="/*" element={ <LoginPage />} />        
      </Routes>
    );
  };

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<PrivateRoutes />} />
      ) : (        
        <Route path="/*" element={<PublicRoutes />} />
      )}
    </Routes>
  );
};
