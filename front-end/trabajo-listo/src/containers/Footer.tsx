import { Link } from "react-router-dom"
import trabajoListo from "../assets/logo-blue.png"

const footerLinks = [
  { to: "/equipo", text: "Conoce al Equipo" },
  { to: "/testimonios", text: "Testimonios" },
  { text: "Términos y Condiciones" },
  { text: "Formas de Pago" },
  { text: "Preguntas Frecuentes" },
  { text: "soportetrabajolisto@gmail.com" },
];

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-12 bg-main-blue py-10 border-t-black border-2 w-full font-libre-franklin">
      <section className="flex items-center justify-evenly w-full h-full">
        <Link to="/">
          <img
            className="w-auto h-60"
            src={trabajoListo}
            alt="Logo Trabajo Listo"
          />
        </Link>
        <ul className="gap-8 grid md:grid-cols-2 xl:grid-cols-2">
          {footerLinks.map((link, index) => (
            <li
              key={index}
              className="p-2 font-medium text-lg hover:text-main-red cursor-pointer list-disc"
            >
              {link.to ? (
                <Link to={link.to}>{link.text}</Link>
              ) : (
                <span>{link.text}</span>
              )}
            </li>
          ))}
        </ul>
      </section>
      <div className="text-center text-gray-700 italic">
        Copyright © 2024 "Trabajo Listo". Todos los derechos reservados.
      </div>
    </footer >
  )
}
