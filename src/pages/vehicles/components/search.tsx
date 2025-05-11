"use client";

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

interface SearchListProps {
  filter: "rastreados" | "outros";
  onFilterChange: (filter: string) => void;
}

export default function SearchList({
  filter,
  onFilterChange,
}: SearchListProps) {
  const { setTheme } = useTheme();

  const handleFilterChange = (value: string) => {
    if (value !== filter) {
      onFilterChange(value);
    }
  };

  return (
    <div className="flex flex-row w-full   justify-between gap-6  items-center px-0 py-4 border-b-2 border-zinc-800 rounded-md">
      <div className="flex flex-row justify-between ">
        <div className="p-6 ">
          <h1 className="text-center  text-2xl font-semibold">
            {" "}
            Marcos Vinícius Pedreira Vieira
          </h1>
        </div>
          <div className="flex h-5 items-center space-x-4 text-sm">
      </div>
        <div className="flex flex-row items-end relative left-2">
      
          <div className="flex flex-col">
            <h2 className="font-semibold text-2xl mb-1">Listar:</h2>
            <div className="flex flex-row gap-3 ">
              <RadioGroup.Root
                className="flex items-center gap-4"
                value={filter}
                onValueChange={handleFilterChange}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroup.Item
                    value="rastreados"
                    id="rastreados"
                    className="w-5 h-5 rounded-full border border-blue-400 data-[state=checked]:bg-blue-500"
                  />
                  <Label htmlFor="rastreados" className="text-sm">
                    Veículos Rastreados
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroup.Item
                    value="outros"
                    id="outros"
                    className="w-5 h-5 rounded-full border border-blue-400 data-[state=checked]:bg-blue-500"
                  />
                  <Label htmlFor="outros" className="text-sm">
                    Outros Veículos
                  </Label>
                </div>
              </RadioGroup.Root>
            </div>
          </div>

          <div className="p-2 relative left-8 ">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Selecionar Tema</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="flex flex-col text-normal relative bottom-10 right-10 gap-3 p-2 rounded-2xl bg-zinc-200 dark:bg-zinc-800 "
                align="end"
              >
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => setTheme("light")}
                >
                  <span>Claro</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => setTheme("dark")}
                >
                  Escuro
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => setTheme("system")}
                >
                  Sistema
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
