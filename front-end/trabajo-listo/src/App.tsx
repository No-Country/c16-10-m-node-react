import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./containers/Navbar";
import "./normalize.css";
import { Home } from "./pages/Home";
import { Footer } from "./containers/Footer";
import { Equipo } from "./pages/Equipo";
import { Testimonios } from "./pages/Testimonios";
import { Perfil } from "./pages/Perfil";
import { EditarPerfil } from "./pages/EditarPerfil";
import { useSelector } from "react-redux";
import { UserState, Notificacion } from "./components/component";
import React from "react";
import { NuevoServicio } from "./pages/NuevoServicio";
import { ToastContainer } from "react-toastify";

const App = () => {
  const user = useSelector((state: { user: UserState }) => state.user);
  const notificacion = useSelector(
    (state: { notif: Notificacion }) => state.notif
  );

  const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    if (!user?.token) return <Navigate to="/" />;
    else return children;
  };
  console.log(notificacion);

  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer
        className=""
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        closeButton={false}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="equipo" element={<Equipo />} />
        <Route path="testimonios" element={<Testimonios />} />
        <Route
          path="perfil/:id"
          element={
            <ProtectedRoute>
              <Perfil />
            </ProtectedRoute>
          }
        />
        <Route
          path="editar-perfil"
          element={
            <ProtectedRoute>
              <EditarPerfil />
            </ProtectedRoute>
          }
        />
        <Route path="nuevo-servicio" element={<NuevoServicio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
