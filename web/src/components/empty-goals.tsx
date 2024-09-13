import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";
import { Logo } from "./logo";
import { HeroEmptyImage } from "./hero-empty-image";

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <Logo />
      <HeroEmptyImage />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal{" "}
        <span className="underline underline-offset-2">cadastrar um</span> agora
        mesmo?
      </p>

      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}
