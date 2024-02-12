import { FormModal } from "@/modals/FormModal"
import logo from "@/assets/navbar-logo.png"

export const Navbar = () => {
  return (
    <header className="relative">
      <img
        src={logo}
        alt="logo Trabajo Listo"
        className="absolute left-2 top-2 w-28"
      />
      <nav className="bg-red-500 py-2 flex gap-12 justify-end h-16 px-20">
        <FormModal
          buttonTitle="Acceder"
          className="bg-transparent text-white hover:bg-white hover:text-black text-base rounded-full"
        />
        <FormModal
          buttonTitle="Registrarse"
          className="bg-transparent text-white hover:bg-white hover:text-black text-base rounded-full"
        />
      </nav>
    </header>
  )
}