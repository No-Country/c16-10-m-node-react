import { FormModal } from "@/modals/FormModal";
import logo from "@/assets/navbar-logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="relative">
      <Link to="/">
        <img
          src={logo}
          alt="logo Trabajo Listo"
          className="top-2 left-2 absolute w-28"
        />
      </Link>
      <nav className="flex justify-end gap-12 bg-red-500 px-20 py-2 h-16">
        <FormModal
          buttonTitle="Acceder"
          className="bg-transparent hover:bg-white rounded-full text-base text-white hover:text-black"
        />
        <FormModal
          buttonTitle="Registrarse"
          className="bg-transparent hover:bg-white rounded-full text-base text-white hover:text-black"
        />
      </nav>
    </header>
  );
};
