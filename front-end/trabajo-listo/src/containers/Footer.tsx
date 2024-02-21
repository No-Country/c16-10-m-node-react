import { Link } from "react-router-dom"
import trabajoListo from "../assets/navbar-logo.png"


export const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-[#D23B42]">
        <div className="flex items-center justify-evenly w-full h-[300px]">
            <section className="flex items-center gap-4 text-[#fffcfc]">
                <img className="rounded-sm h-[240px]" src={trabajoListo} alt="Imagen Logo Trabajo Listo" />
                <div className="flex flex-col h-[200px]">
                    <h3 className="mb-3 font-bold text-2xl italic">TRABAJO LISTO</h3>
                    <div>
                        <Link to="/equipo">
                            <p className="hover:underline mb-2">Conoce al Equipo</p>
                        </Link>
                        <p className="cursor-pointer hover:underline mb-2">Términos y Condiciones</p>
                        <p className="cursor-pointer hover:underline mb-2">Formas de Pago</p>
                        <p className="cursor-pointer hover:underline mb-2">Preguntas Frecuentes</p>
                        <Link to="/Testimonios">
                            <p className="cursor-pointer hover:underline mb-2">Testimonios</p>
                        </Link>
                    </div>
                </div>
            </section>
            <div className="w-[380px] h-[200px] text-[#fffcfc]">
                <h3 className="mb-3 font-bold text-2xl italic">SOPORTE</h3>
                <div className="flex gap-2 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <p>TrabajoListoSoporte@gmail.com</p>
                </div>
                <div className="flex gap-2 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <p>CABA, caballito, AR</p>
                </div>
                <div className="flex gap-2 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <p>+54 11-21826799</p>
                </div>
                <div className="flex gap-2 mb-3"></div>
            </div>
        </div>
        <span className="pb-4 text-[#fffcfc]">Copyright © 2024 Trabajo Listo. All rights reserved.</span>
    </footer>
  )
}
