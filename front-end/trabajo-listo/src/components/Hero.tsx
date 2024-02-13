import { Button } from "./ui/button";
import imageHome from "../assets/homeImage.avif";

const Hero = () => {
  return (
    <div className="h-[675px] flex bg-white px-10 border-white justify-around items-center ">
      <div className="flex-1 flex flex-col justify-around h-[60%]">
        <div className="flex flex-col gap-2">
          <h2 className=" text-3xl font-black text-[#5D5657]">TE OFRECEMOS</h2>
          <h3 className="text-3xl text-[#5D5657] font-bold">
            Accesibilidad y velocidad de busquedas en servicios
          </h3>
        </div>
        <p className="text-2xl text-[#5D5657] font-medium">
          Lorem ipsum dolor sit amet consectetur adipiscing elit integer
          himenaeos, sapien a feugiat rutrum commodo malesuada dis viverra,
          faucibus pulvinar ultricies tellus purus euismod gravida venenatis.
        </p>
        <Button className="bg-red-500 hover:bg-red-600 px-10 w-32 rounded-full  text-lg text-white hover:text-white outline-none ">
          Comenzar
        </Button>
      </div>
      <div className="flex-1 flex items-center justify-center h-[60%] ">
        <img className="rounded-xl" src={imageHome}></img>
      </div>
    </div>
  );
};

export default Hero;
