import { useState } from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown } from "lucide-react"
import { Button } from "../../../../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu"
import { Input } from "../../../../components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table"
import type { LocationVehicles } from "../../../../types/types"


interface locationVehiclesProps {
  locatedVehicles : LocationVehicles[]
}
export function VehiclesinLocationLDataTables({
  locatedVehicles
}: locationVehiclesProps) {
  const data = locatedVehicles
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )
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
        )
      },
      cell: ({ row }) => <div className="uppercase px-4">{row.getValue("plate")}</div>,
    },
    
    {
      accessorKey: "fleet",
      header: ({column})=>{
        return(
          <Button
          variant="ghost"
          onClick={()=> column.toggleSorting(column.getIsSorted()==="asc")}
          >
              Frota
              <ArrowUpDown />
          </Button>
          
    
        )
      },
      cell: ({ row }) => <div className="flex capitalize  px-4">{row.getValue("fleet")}</div>,
    },
    
    {
      accessorKey: "name",
      header: ({column})=>{
        return(
          <Button
          variant="ghost"
          onClick={()=> column.toggleSorting(column.getIsSorted()==="asc")}
          >
              Modelo
              <ArrowUpDown />
          </Button>
          
    
        )
      },
      cell: ({ row }) => <div className="capitalize px-4">{row.getValue("name")}</div>,
    },
  
    {
      accessorKey: "ignition",
      header: ({column})=>{
        return(
          <Button
          variant="ghost"
          onClick={()=> column.toggleSorting(column.getIsSorted()==="asc")}
          >
              Status
              <ArrowUpDown />
          </Button>
          
    
        )
      },
      cell: ({ row }) => <div className="capitalize px-4">{row.getValue("ignition")}</div>,
    },
  ]
  const [columnVisibility, setColumnVisibility] =
    useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  const switchLabelName = (id: string) => {
    switch (id) {
      case 'plate':
        return 'Placa';
      case 'fleet':
        return 'frota';
      case 'type':
        return 'tipo';
      case 'model':
        return 'modelo';
      case 'nameOwner':
        return 'Locado por';
      case 'status':
        return 'status';
      case 'name':
        return 'modelo';
      
      case 'ignition':
          return 'status';
      default:
        return id;
    }
  };
  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filtrar por placa ou Frota"
          value={(table.getColumn("plate")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("plate")?.setFilterValue(event.target.value)
          }
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
                    {
                      switchLabelName(column.id)              
                    }
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
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
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
