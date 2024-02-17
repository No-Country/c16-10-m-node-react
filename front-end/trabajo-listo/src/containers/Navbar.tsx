import logo from "@/assets/navbar-logo.png"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { FormSignUpModal } from "@/modals/FormSignUpModal"
import { FormLogInModal } from "@/modals/FormLogInModal"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const listOfServices = [
  "Reparaciones",
  "Lavados",
  "Mensajería",
  "Transporte",
  "Instalaciones",
  "Decoraciones",
  "Limpieza",
  "Cuidados",
  "Salud",
  "Jardinería",
  "Enseñanza",
  "Seguridad",
  "Peluquería",
  "Cumpleaños",
  "Alquileres"
]

export const Navbar = () => {
  const searchService = (service: string) => {
    try {
      console.log(service)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <header className="relative">
      <Link to="/">
        <img
          src={logo}
          alt="logo Trabajo Listo"
          className="top-2 left-2 absolute w-28"
        />
      </Link>
      <nav className="flex items-center justify-end gap-12 bg-red-500 px-20 py-2 h-16">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent data-[state=open]:bg-white rounded-full text-base text-white data-[state=open]:text-black">
                Servicios
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid md:grid-cols-3 gap-1 p-4 w-[400px] md:w-[500px]">
                  {listOfServices.map((service, i) => (
                    <li
                      className="hover:bg-gray-50 p-1 rounded-md font-semibold text-black hover:text-red-500 cursor-pointer"
                      key={i}
                      onClick={() => searchService(service)}
                    >
                      <NavigationMenuLink>
                        {service}
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button className="bg-transparent hover:bg-white rounded-full text-base text-white hover:text-black">
          ¡Quiero ser profesional!
        </Button>
        <Link to="/Testimonios">
          <Button className="bg-transparent hover:bg-white rounded-full text-base text-white hover:text-black">
            Testimonios
          </Button>
        </Link>
        <FormLogInModal />
        <FormSignUpModal />

      </nav>
    </header>
  )
}