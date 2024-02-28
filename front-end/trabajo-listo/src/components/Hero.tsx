import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useSelector } from "react-redux";
import { UserState } from "./component";
import { FormSignUpModal } from "@/modals/FormSignUpModal";

export const Hero = () => {
  const [searchValue, setSearchValue] = useState("");
  const user = useSelector((state: { user: UserState }) => state.user);

  const handleSearch = () => {
    try {
      console.log(searchValue);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex justify-start items-center gap-16 bg-hero-banner border-b-2 border-black w-[1500px] max-w-full h-[601px]">
      <div className="flex flex-col gap-16 ml-8 w-3/5">
        <section className="flex flex-col items-center gap-2">
          <h1 className="font-extrabold font-galada text-7xl text-main-red tracking-wide">
            ¡Tus Servicios a un Click!
          </h1>
          <h3 className="font-bold font-libre-franklin text-gray-700 text-xl italic">
            Velocidad y accesibilidad en búsquedas de servicios
          </h3>
        </section>
        {user.id ? (
          <search className="flex border-2 border-main-red bg-white">
            <Input
              className="border-0 px-4 font-medium text-gray-700 text-xl outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              type="text"
              value={searchValue}
              placeholder="Busca tu servicio aquí"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button
              onClick={handleSearch}
              className="bg-main-red hover:bg-main-hover px-10 rounded-none h-full text-lg text-white outline-none"
            >
              Buscar
            </Button>
          </search>
        ) : (
          <div className="flex justify-center">
            <FormSignUpModal className="bg-main-red hover:bg-main-hover px-10 rounded-none w-fit h-full text-lg text-white hover:text-white outline-none" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
