import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./containers/Navbar";
import "./normalize.css";
import { SearchPage } from "./pages/Search";
import { Home } from "./pages/Home";
import { Footer } from "./containers/Footer";
import { Equipo } from "./pages/Equipo";
import { Testimonios } from "./pages/Testimonios";
import { Perfil } from "./pages/Perfil";
import { EditarPerfil } from "./pages/EditarPerfil";
import { useSelector } from "react-redux";
import { UserState } from "./components/component";
import React from "react";
import { NuevoServicio } from "./pages/NuevoServicio";

const App = () => {
  const user = useSelector((state: { user: UserState }) => state.user);

  const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    if (!user?.token) return <Navigate to="/" />;
    else return children;
  };

  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<SearchPage />} />
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
