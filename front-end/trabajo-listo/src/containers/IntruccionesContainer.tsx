import ServiciosCard from "@/components/InstruccionesCard";
import image1 from "../assets/imageServicio1.png";
import image2 from "../assets/imageServicio2.png";
import image3 from "../assets/imageServicio3.png";
import { Servicio, UserState } from "@/components/component";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "@/store/userSlice";

const IntruccionesContainer = () => {
  const DUMMY_SERVICIOS = [
    {
      imgUrl: image1,
      id: 1,
      title: "REGISTRARSE",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit integerhimenaeos, sapien a feugiat rutrum commodo malesuada dis viverra,faucibus pulvinar ultricies tellus purus euismod gravida venenatis.",
    },
    {
      imgUrl: image2,
      id: 2,
      title: "BUSCAR",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit integerhimenaeos, sapien a feugiat rutrum commodo malesuada dis viverra,faucibus pulvinar ultricies tellus purus euismod gravida venenatis.",
    },
    {
      imgUrl: image3,
      id: 3,
      title: "ADQUIRIR",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit integerhimenaeos, sapien a feugiat rutrum commodo malesuada dis viverra,faucibus pulvinar ultricies tellus purus euismod gravida venenatis.",
    },
  ];

  const dispatch = useDispatch();
  const users = useSelector((state: { user: UserState }) => state.user);

  console.log(users);
  return (
    <div
      onClick={() => {
        dispatch(
          userActions.USER_LOGIN({
            nombre: "fernando",
            email: "fernando@hotmail.com",
          })
        );
        console.log(users);
      }}
      className="flex flex-col gap-20 bg-[#fffcfc] px-10 py-20"
    >
      <div className="text-center">
        <h1 className="px-5 py-3 rounded-xl font-bold text-3xl text-red-500 italic">
          ¿COMO PUEDO CONTRATAR?
        </h1>
        <h2 className="font-bold text-[#5D5657] text-2xl">
          Siga estas indicanciones
        </h2>
      </div>
      <div className="flex flex-col items-center gap-7 px-1 ">
        {DUMMY_SERVICIOS.map((servicio: Servicio) => (
          <ServiciosCard key={servicio.id} servicio={servicio}></ServiciosCard>
        ))}
      </div>
    </div>
  );
};

export default IntruccionesContainer;
