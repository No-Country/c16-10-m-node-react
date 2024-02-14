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

type FormModalProps = {
  buttonTitle: "Registrarse" | "Acceder";
  className?: string;
};

export const FormModal = ({ buttonTitle, className }: FormModalProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const isRegister = buttonTitle === "Registrarse";

  const formSchema = z.object({
    email: z.string().min(5, {
      message: "Ingrese un email válido",
    }),
    contraseña: z.string().min(8, {
      message: isRegister ? "Mínimo 8 caracteres" : "Contraseña inválida",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      contraseña: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    form.reset();
    setIsChecked(false);
  };

  return (
    <Sheet onOpenChange={handleClose}>
      <SheetTrigger asChild>
        <Button variant="default" className={className}>
          {buttonTitle}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-4">
          <SheetTitle>
            {isRegister ? (
              <p>
                Registrarse en <i>Trabajo Listo</i>
              </p>
            ) : (
              "Iniciar sesión"
            )}
          </SheetTitle>
          <SheetDescription>
            {isRegister
              ? "¡Regístrate y comienza a contratar a tus profesionales favoritos!"
              : "¡Accede y contrata a profesionales de tu preferencia!"}
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
              name="contraseña"
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
            {isRegister && (
              <div className="flex items-center mt-4 space-x-2">
                <Checkbox id="terms" onClick={() => setIsChecked(!isChecked)} />
                <label
                  htmlFor="terms"
                  className="peer-disabled:opacity-70 font-medium text-sm leading-none peer-disabled:cursor-not-allowed"
                >
                  Aceptar términos y condiciones
                </label>
              </div>
            )}
            <Button
              className="bg-red-500 hover:bg-red-600"
              type="submit"
              disabled={isRegister && !isChecked}
            >
              {isRegister ? "Crear cuenta" : "Ingresar"}
            </Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};
