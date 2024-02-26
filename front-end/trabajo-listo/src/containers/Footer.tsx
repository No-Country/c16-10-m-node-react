import { Link } from "react-router-dom"
import trabajoListo from "../assets/logo-blue.png"


export const Footer = () => {
	return (
		<footer className="flex flex-col gap-12 bg-main-blue py-10 border-t-black border-2 w-full font-libre-franklin">
			<section className="flex items-center justify-evenly w-full h-full">
				<img
					className="w-auto h-60"
					src={trabajoListo}
					alt="Logo Trabajo Listo"
				/>
				<ul className="gap-8 grid grid-cols-2">
					<li className="p-2 font-medium text-lg hover:text-main-red cursor-pointer list-disc">
						<Link to="/equipo">
							Conoce al Equipo
						</Link>
					</li>
					<li className="p-2 font-medium text-lg hover:text-main-red cursor-pointer list-disc">
						<Link to="/Testimonios">
							Testimonios
						</Link>
					</li>
					<li className="p-2 font-medium text-lg hover:text-main-red cursor-pointer list-disc">
						Términos y Condiciones
					</li>
					<li className="p-2 font-medium text-lg hover:text-main-red cursor-pointer list-disc">
						Formas de Pago
					</li>
					<li className="p-2 font-medium text-lg hover:text-main-red cursor-pointer list-disc">
						Preguntas Frecuentes
					</li>
					<li className="p-2 font-medium text-lg hover:text-main-red cursor-pointer list-disc">
						soportetrabajolisto@gmail.com
					</li>
				</ul>
			</section>
			<div className="text-center text-gray-700 italic">
				Copyright © 2024 "Trabajo Listo". Todos los derechos reservados.
			</div>
		</footer >
	)
}