export interface ServiciosCardProps {
  servicio: {
    imgUrl: string;
    id: number;
    title: string;
    text: string;
    nombre?: string;
  };
}

export interface ServicioProfesionalprops {
  servicioProfesional: {
    imgUrl: string;
    id: number;
    nombre: string;
    servicio: ServiciosCardProps;
  };
}

export interface OfrecemosCards {
  card: {
    id: number;
    text: string;
    title: string;
    svg: React.ReactNode;
  };
}
