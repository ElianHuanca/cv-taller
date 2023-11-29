import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage, RegisterPage } from "../auth/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login, logout } from "../store/auth/authSlice";
import { Principal } from "../pages/Principal";
import { Trabajos } from "../pages/Trabajos";
import { FormTrabajo } from "../pages/FormTrabajo";
import { Perfil } from "../pages/Perfil";
import { Postulaciones } from "../pages/Postulaciones";
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
      dispatch(login({ id: user.id, nombre: user.nombre,correo: user.correo, rol: user.rol }));
    }
  }, [status]);

  const PrivateRoutes = () => {
    return (
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/*" element={<Trabajos />} />
        <Route path="/trabajo/:id" element={<Trabajo />} />        
        <Route path="/crearTrabajo" element={<FormTrabajo />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/crearEntrevista" element={<FormEntrevista />} />
        <Route path="/postulaciones" element={<Postulaciones />} />
        <Route path="/postulacion" element={<Postulacion />} />
        {/* <Route path="/*" element={<Navigate to="/" />} /> */}
        
      </Routes>
    );
  };

  const PublicRoutes = () => {
    return (
      <Routes>
        <Route path="/auth/register" element={<RegisterPage />} />

        <Route path="/auth/login" element={<LoginPage />} />

        <Route path="/*" element={<Principal />} />
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
