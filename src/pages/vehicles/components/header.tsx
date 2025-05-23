
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";
import { Button } from "../../../components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../../components/providers/theme-provider";
import { useIsMobile } from "../../../hooks/use-mobile";


interface SearchListProps {
  filter: "rastreados" | "outros";
  onFilterChange: (filter: string) => void;
}

export default function SearchList({
  filter,
  onFilterChange,
}: SearchListProps) {
  const { setTheme } = useTheme();
  const isMobile = useIsMobile();
  const handleFilterChange = (value: string) => {
    if (value !== filter) {
      onFilterChange(value);
    }
  };
  
    return (
    <div className="w-full px-4 py-6 border-b-2 border-zinc-800 rounded-md">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex flex-row  justify-start items-start">
          
          <h1 className="lg:text-3xl md:text-lg font-semibold text-center md:text-left">
          Marcos Vinícius Pedreira Vieira
        </h1>
           {isMobile && (
              <div className="relative left-12 bottom-">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Selecionar Tema</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="flex flex-col text-sm gap-2 p-2 rounded-2xl bg-zinc-200 dark:bg-zinc-800"
                align="end"
              >
                <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("light")}>
                  Claro
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("dark")}>
                  Escuro
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("system")}>
                  Sistema
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          )}  
        </div>
       

      
        <div className="flex flex-col md:flex-row md:items-end gap-6 w-full md:w-auto justify-between">
         
          <div className="flex flex-col">
            <h2 className="font-semibold text-base md:text-lg mb-2">Listar:</h2>
            <RadioGroup.Root
              className="flex flex-wrap items-center gap-4"
              value={filter}
              onValueChange={handleFilterChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroup.Item
                  value="rastreados"
                  id="rastreados"
                  className="w-5 h-5 rounded-full border border-blue-400 data-[state=checked]:bg-blue-500"
                />
                <Label htmlFor="rastreados" className="text-sm">Veículos Rastreados</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroup.Item
                  value="outros"
                  id="outros"
                  className="w-5 h-5 rounded-full border border-blue-400 data-[state=checked]:bg-blue-500"
                />
                <Label htmlFor="outros" className="text-sm">Outros Veículos</Label>
              </div>
            </RadioGroup.Root>
          </div>

          {!isMobile && (
              <div className="relative left-3 bottom-4 z-10">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Selecionar Tema</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="flex flex-col text-sm gap-2 p-2 rounded-2xl bg-zinc-200 dark:bg-zinc-800"
                align="end"
              >
                <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("light")}>
                  Claro
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("dark")}>
                  Escuro
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("system")}>
                  Sistema
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          )}
        
        </div>
      </div>
    </div>
  );
}
