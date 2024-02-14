"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"


export const FormSignUpModal = () => {
  const [isChecked, setIsChecked] = useState(false)

  const formSchema = z.object({
    email: z.string().min(5, {
      message: "Ingrese un email válido"
    }),
    contraseña: z.string().min(8, {
      message: "Mínimo 8 caracteres"
    })
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      contraseña: ""
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values)
    } catch (error) {
      console.log(error)
    }
  }

  const handleClose = () => {
    form.reset()
    setIsChecked(false)
  }

  return (
    <Sheet onOpenChange={handleClose}>
      <SheetTrigger asChild>
        <Button variant="default" className="bg-transparent hover:bg-white rounded-full text-base text-white hover:text-black">
          Registrarse
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-4">
          <SheetTitle>
            Registrarse en <i>Trabajo Listo</i>
          </SheetTitle>
          <SheetDescription>
            ¡Regístrate y comienza a contratar a tus profesionales favoritos!"
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="jesus@gmail.com"
                      className="focus-visible:ring-0 focus-visible:ring-offset-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contraseña"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Contraseña
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder=""
                      className="focus-visible:ring-0 focus-visible:ring-offset-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center mt-4 space-x-2">
              <Checkbox
                id="terms"
                onClick={() => setIsChecked(!isChecked)}
              />
              <label
                htmlFor="terms"
                className="peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed"
              >
                Aceptar términos y condiciones
              </label>
            </div>
            <Button
              className="bg-red-500 hover:bg-red-600 rounded-full"
              type="submit"
              disabled={!isChecked}
            >
              Crear cuenta
            </Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}
