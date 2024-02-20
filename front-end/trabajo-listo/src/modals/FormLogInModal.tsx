"use client";
import { authUser, getProfile } from "@/api/user.endpoint";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { userActions } from "@/store/userSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { z } from "zod";

export const FormLogInModal = () => {
  const dispatch = useDispatch();

  const formSchema = z.object({
    email: z.string().min(5, {
      message: "Ingrese un email válido",
    }),
    password: z.string().min(8, {
      message: "Contraseña inválida",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const token = await authUser(values);
    
    if (token) {
      dispatch(userActions.SET_TOKEN({token: token}))
      const userData = await getProfile(token);
      dispatch(userActions.USER_LOGIN(userData));
    }
  };

  const handleClose = () => {
    form.reset();
  };

  return (
    <Sheet onOpenChange={handleClose}>
      <SheetTrigger asChild>
        <Button
          variant="default"
          className="bg-transparent hover:bg-white rounded-full text-base text-white hover:text-black"
        >
          Acceder
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-4">
          <SheetTitle>Iniciar sesión</SheetTitle>
          <SheetDescription>
            ¡Accede y contrata a profesionales de tu preferencia!"
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
            <Button
              className="bg-red-500 hover:bg-red-600 rounded-full"
              type="submit"
            >
              Ingresar
            </Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};
