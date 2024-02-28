import { FormModal } from "@/modals/FormModal"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"


export const Banner = () => {
  const [searchValue, setSearchValue] = useState("")

  const handleSearch = () => {
    try {
      console.log(searchValue)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-16 bg-red-100/50 h-80 ">
      <section className="flex items-center gap-24 font-bold text-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl text-red-500">
            Tus servicios a un click
          </h1>
          <h4 className="font-medium text-neutral-500 text-xl">
            Contrata, negocia y encuentra tus necesidades
          </h4>
        </div>
        <FormModal
          buttonTitle="Registrarse"
          className="bg-red-500 hover:bg-red-600 py-6 rounded-full w-72 font-medium text-white text-xl hover:text-white "
        />
      </section>
      <search className="flex justify-between bg-white border-red-500 border-2 rounded-full w-[70%] overflow-hidden">
        <Input
          className="px-8 border-0 text-xl outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          type="text"
          value={searchValue}
          placeholder="Busca tu servicio o profesional aquí..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button
          onClick={handleSearch}
          className="bg-red-500 hover:bg-red-600 px-10 rounded-full h-full text-lg text-white hover:text-white outline-none"
        >
          Buscar
        </Button>
      </search>
    </div>
  )
}