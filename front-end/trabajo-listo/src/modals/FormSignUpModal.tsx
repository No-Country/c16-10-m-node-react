"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { registerUser } from "@/api/user.endpoint";

export const FormSignUpModal = () => {
  const [isChecked, setIsChecked] = useState(false);

  const formSchema = z.object({
    name: z.string().min(3, {
      message: "Mínimo 3 caracteres"
    }),
    email: z.string().min(5, {
      message: "Ingrese un email válido",
    }),
    password: z.string().min(8, {
      message: "Mínimo 8 caracteres",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    registerUser(values)
  };

  const handleClose = () => {
    form.reset();
    setIsChecked(false);
  };

  return (
    <Sheet onOpenChange={handleClose}>
      <SheetTrigger asChild>
        <Button
          variant="default"
          className="bg-transparent hover:bg-white rounded-full text-base text-white hover:text-black"
        >
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Nombre y apellido
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Jesus"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
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
              <Checkbox id="terms" onClick={() => setIsChecked(!isChecked)} />
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
  );
};
