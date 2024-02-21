import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./containers/Navbar";
import "./normalize.css";
import { SearchPage } from "./pages/Search";
import { Home } from "./pages/Home";
import { Footer } from "./containers/Footer";
import { Equipo } from "./pages/Equipo";
import { Testimonios } from "./pages/Testimonios";
import { Perfil } from "./pages/Perfil";
import { EditarPerfil } from "./pages/EditarPerfil";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="equipo" element={<Equipo />} />
        <Route path="testimonios" element={<Testimonios />} />
        <Route path="perfil/:id" element={<Perfil /> }/>
        <Route path="editar-perfil" element={<EditarPerfil /> }/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
