export interface ServiciosCardProps {
  servicio: {
    imgUrl: string;
    id: number;
    title: string;
    text: string;
  };
}

export interface OfrecemosCards {
    card: {
        id: number;
        text: string;
        title: string;
        svg: React.ReactNode;
    }
}