import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
const Funca = ({ opciones, titulo }) => {
  const [valor, setValor] = useState(titulo);
  return (
    <NavigationMenu className="w-80   ">
      <NavigationMenuList className="w-80 ">
        <NavigationMenuItem className="w-80 ">
          <NavigationMenuTrigger className="w-80 flex justify-between font-semibold">
            {valor}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col w-80 min-h-28 justify-between items-center ">
            <ScrollArea
              scrollbarColor="#000000"
              className="h-[160px] w-[320px] rounded-md border p-4"
            >
              {opciones.map((opcion, index) => (
                <NavigationMenuLink
                  onClick={() => setValor(opcion)}
                  className="w-80 h-full pl-2 py-4 my-1 items-center flex hover:bg-slate-100 cursor-pointer"
                  key={index}
                >
                  {opcion}
                </NavigationMenuLink>
              ))}
            </ScrollArea>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Funca;
