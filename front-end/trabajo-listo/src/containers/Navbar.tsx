import logo from "@/assets/navbar-logo.png"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { FormSignUpModal } from "@/modals/FormSignUpModal"
import { FormLogInModal } from "@/modals/FormLogInModal"


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
        <Button className="bg-transparent hover:bg-white rounded-full text-base text-white hover:text-black">
          ¡Quiero ser profesional!
        </Button>
        <FormLogInModal />
        <FormSignUpModal />
      </nav>
    </header>
  )
}