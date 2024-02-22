export interface Servicio {
  imgUrl: string;
  id: number;
  title: string;
  text: string;
  nombre?: string;
}

export interface ServicioProfesional {
  _id: string;
  category: string;
  comments: [];
  description: string;
  idProfessional: string;
  imagePost: string;
  nameProfessional: string;
  services: { name: string; price: number }[];
  title: string;
  views: number;
  __v: number;
}

export interface OfrecemosCards {
  card: {
    id: number;
    text: string;
    title: string;
    svg: React.ReactNode;
  };
}

export interface EquipoCards {
  item: {
    id: number;
    nombre: string;
    rol: string;
    link: string;
    img: string;
  };
}

export interface UserState {
  name: string;
  email: string;
  imageProfile: string;
  id: string;
  token: string;
  isPro: boolean;
}
export interface tokenUser {
  email: string;
  exp: number;
  iat: number;
  id: string;
  message: string;
}
