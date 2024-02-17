import Hero from "@/components/Hero";
import Servicios from "@/containers/IntruccionesContainer";
import { OfrecemosContainer } from "@/containers/OfrecemosContainer";
import RecomendacionesContainer from "@/containers/RecomendacionesContainer";
import { TuNecesidad } from "@/containers/TuNecesidad";

export const Home = () => {
  return (
    <main>
      <Hero />
      <Servicios />
      <OfrecemosContainer />
      <TuNecesidad />
      <RecomendacionesContainer />
    </main>
  );
};
