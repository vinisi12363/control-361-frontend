import { useState, useEffect } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type Row,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, Loader2 } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { Input } from "../../../../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import type { LocationVehicles } from "../../../../types/types";
import { useInView } from "react-intersection-observer";
import { useLocationVehiclesStore } from "../../../../store/useLocationVehiclesStore";
import { useLocationVehiclesMutation } from "../../../../hooks/useLocationVehiclesMutation";

export function VehiclesinLocationLDataTables() {
  const { data  } = useLocationVehiclesStore();
  const mutation = useLocationVehiclesMutation();
  const [globalFilter , setGlobalFilter] = useState("");
  const [ref, inView] = useInView({threshold: 0.7 });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const columns: ColumnDef<LocationVehicles>[] = [
    {
      accessorKey: "plate",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Placa
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="uppercase px-4">{row.getValue("plate")}</div>
      ),
    },
   
    {
      accessorKey: "fleet",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Frota
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="flex capitalize  px-4">{row.getValue("fleet")}</div>
      ),
    },

    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Modelo
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize px-4">{row.getValue("name")}</div>
      ),
    },

    {
      accessorKey: "ignition",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Status
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize px-4">{row.getValue("ignition")}</div>
      ),
    },
  ];
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
   globalFilterFn: (
         row: Row<LocationVehicles>,
       ): boolean => {
         const plate = row.original.plate?.toLowerCase() ?? "";
         const fleet = row.original.fleet?.toLowerCase() ?? "";
         const filter = globalFilter.toLowerCase();
   
         return plate.includes(filter) || fleet.includes(filter);
       },
    state: {
      sorting,
      globalFilter,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

useEffect(() => {
  if (inView && !mutation.isPending) {
    const timer = setTimeout(() => {
      mutation.mutate({
        page: 1,
        perPage: Math.floor(data.length / 10) + 1,
      });
    }, 250);

    return () => clearTimeout(timer); 
  }
}, [inView, mutation.isPending, mutation.mutate]);

 const getColumnLabel = (id: string) => {
    const labels: Record<string, string> = {
      plate: "Placa",
      fleet: "Frota",
      type: "Tipo",
      model: "Modelo",
      nameOwner: "Locado por",
      status: "Status",
      name: "Modelo",
      ignition: "Status"
    };
    return labels[id] || id;
  };

  return (
  
      <div className="w-full">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filtrar por placa ou Frota"
            value={globalFilter}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Selecionar Campos <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {getColumnLabel(column.id)}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border max-h-[600px]">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow  className="border border-gray-700 dark:border-gray-400/40 " key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                <>
                  {table.getRowModel().rows.map((row) => (
                    <TableRow className="border border-gray-700 dark:border-gray-400/40 " key={row.id} data-state={row.getIsSelected() && "selected"}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell className="border border-gray-600 dark:border-gray-400/40 " key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                { (
                    <TableRow ref={ref}>
                      <TableCell colSpan={columns.length} className="text-center py-4">
                        {mutation.isPending ? (
                          <div className="inline-flex items-center">
                            <Loader2 className="animate-spin h-4 w-4 mr-2" />
                            Carregando lista...
                          </div>
                        ) : (
                          "Role para carregar mais"
                        )}
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ) : (
              <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    {mutation.isPending ? (
                      <Loader2 className="animate-spin h-6 w-6 mx-auto" />
                    ) : (
                    <div className="inline-flex items-center">
                            <Loader2 className="animate-spin h-4 w-4 mr-2" />
                            Carregando lista...
                          </div>
                      
                    )}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
  
  );
}
