import { UserState } from "@/components/component";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { userActions } from "@/store/userSlice";
import { useDispatch, useSelector } from "react-redux";

export const VerPerfilModal = ({ className }: { className?: string }) => {
  const user = useSelector((state: { user: UserState }) => state.user);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(userActions.USER_LOGOUT());
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="default"
          className={cn(
            "bg-transparent hover:bg-gray-100 rounded-full text-base text-white hover:text-black",
            className
          )}
        >
          Mi Perfil
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center w-72">
        <SheetHeader>
          <SheetTitle>

          </SheetTitle>
          <img
            className="rounded-full w-20 h-20"
            src={user.imageProfile}
            alt="Foto de perfil"
          />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
