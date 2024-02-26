import logo from "@/assets/navbar-logo.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FormSignUpModal } from "@/modals/FormSignUpModal";
import { FormLogInModal } from "@/modals/FormLogInModal";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "@/components/component";
import { userActions } from "@/store/userSlice";
import { VerPerfilModal } from "@/modals/VerPerfilModal";

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
  "Alquileres",
];

export const Navbar = () => {
  const searchService = (service: string) => {
    try {
      console.log(service);
    } catch (error) {
      console.log(error);
    }
  };
  const user = useSelector((state: { user: UserState }) => state.user);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(userActions.USER_LOGOUT());
  };

  return (
    <header className="relative font-libre-franklin">
      <Link to="/">
        <img
          src={logo}
          alt="logo Trabajo Listo"
          className="top-2 left-2 absolute w-28"
        />
      </Link>

      <nav className="flex items-center justify-end gap-12 bg-main-red px-20 h-16">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent data-[state=open]:bg-white rounded-full text-base text-white data-[state=open]:text-black">
                Servicios
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="gap-1 grid md:grid-cols-3 p-4 w-[400px] md:w-[500px]">
                  {listOfServices.map((service, i) => (
                    <li
                      className="hover:bg-gray-50 p-1 rounded-md font-semibold text-black hover:text-mbg-main-red cursor-pointer"
                      key={i}
                      onClick={() => searchService(service)}
                    >
                      <NavigationMenuLink>{service}</NavigationMenuLink>
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
        {user?.name ? (
          <VerPerfilModal />

          // <NavigationMenu>
          //   <NavigationMenuList>
          //     <NavigationMenuItem>
          //       <NavigationMenuTrigger className="bg-transparent data-[state=open]:bg-white focus:bg-transparent mr-3 pr-2 pl-0 rounded-full text-base text-white data-[state=open]:text-black">
          //         <img
          //           className="rounded-full w-10 h-10"
          //           src={user.imageProfile}
          //         ></img>
          //       </NavigationMenuTrigger>
          //       <NavigationMenuContent>
          //         <ul className="gap-1 grid md:grid-cols-1 p-4 w-[125px] md:w-[150px]">
          //           <li className="hover:bg-gray-50 p-1 rounded-md w-[300px] font-semibold text-black hover:text-red-500 cursor-pointer">
          //             <Link to={`/perfil/${user.id}`}>Ver perfil</Link>
          //           </li>
          //           <li
          //             onClick={logoutHandler}
          //             className="hover:bg-gray-50 p-1 rounded-md w-[300px] font-semibold text-black hover:text-red-500 cursor-pointer"
          //           >
          //             Cerrar sesión
          //           </li>
          //         </ul>
          //       </NavigationMenuContent>
          //     </NavigationMenuItem>
          //   </NavigationMenuList>
          // </NavigationMenu>
        ) : (
          <>
            <FormLogInModal />
            <FormSignUpModal />
          </>
        )}
      </nav>
    </header>
  );
};
