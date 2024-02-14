import Hero from "@/components/Hero";
import Servicios from "@/containers/ServiciosContainer";
import { OfrecemosContainer } from "@/containers/OfrecemosContainer"
import { TuNecesidad } from "@/containers/TuNecesidad"

export const Home = () => {
  return (
    <main>
      <Hero />
      <Servicios />
      <OfrecemosContainer/>
      <TuNecesidad />
    </main>
  );
}; 

