import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./containers/Navbar";
import "./normalize.css";
import { SearchPage } from "./pages/Search";
import { Home } from "./pages/Home";
import Testimonios from "./pages/Testimonios";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="testimonios" element={<Testimonios />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
