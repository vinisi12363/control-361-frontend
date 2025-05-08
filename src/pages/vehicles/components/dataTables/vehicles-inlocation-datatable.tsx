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
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { Button } from "../../../../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
import type { Vehicle } from "../../../../types/types"


const data: Vehicle[] = [

    { 
      id: "a8c1a74b-774b-4887-b1cd-8e7c68b75d7f",
      plate: "HTG7M10",
      fleet: "Frota A",
      type: "vehicle",
      model: "FUSCA",
      nameOwner: "PAULO",
      status: "active",
      createdAt: "2025-05-02T13:25:47.512Z"
    },
    { 
      id: "c0b627c8-9b90-4f62-85c2-3e446ad59e2f",
      plate: "BLJ5K32",
      fleet: "Frota A",
      type: "vehicle",
      model: "FUSCA",
      nameOwner: "CARLOS",
      status: "inactive",
      createdAt: "2025-05-03T09:12:18.694Z"
    },
    { 
      id: "cc4d1f95-57f5-4639-bc85-3f6190e6d7c1",
      plate: "UHZ2P45",
      fleet: "Frota B",
      type: "vehicle",
      model: "PALIO",
      nameOwner: "ANDREA",
      status: "active",
      createdAt: "2025-05-06T11:09:54.001Z"
    },
    { 
      id: "a1b2359a-70ea-4c0b-b1db-b6aadd0b9085",
      plate: "JIK9R78",
      fleet: "Frota B",
      type: "vehicle",
      model: "PALIO",
      nameOwner: "FERNANDO",
      status: "inactive",
      createdAt: "2025-05-02T16:39:10.331Z"
    },
    { 
      id: "d9e60e2c-d377-4bff-b6a6-5d3e8c5a03b7",
      plate: "ZKG1J28",
      fleet: "Frota C",
      type: "vehicle",
      model: "CIVIC",
      nameOwner: "JULIA",
      status: "active",
      createdAt: "2025-05-01T10:25:30.492Z"
    },
    { 
      id: "6d3b18b0-418a-4429-9ca5-015d0b1e92de",
      plate: "LVH3R92",
      fleet: "Frota C",
      type: "vehicle",
      model: "CIVIC",
      nameOwner: "MARCELO",
      status: "inactive",
      createdAt: "2025-05-03T15:40:28.389Z"
    },
    { 
      id: "77ab9b88-6112-41c2-b1e4-099ad50c5d23",
      plate: "ATB8S44",
      fleet: "Frota D",
      type: "vehicle",
      model: "COROLLA",
      nameOwner: "RICARDO",
      status: "active",
      createdAt: "2025-05-02T17:31:09.786Z"
    },
    { 
      id: "00f18c2a-5805-4bb5-b0a2-83c1ca57656b",
      plate: "LPY1F73",
      fleet: "Frota D",
      type: "vehicle",
      model: "COROLLA",
      nameOwner: "BRUNA",
      status: "inactive",
      createdAt: "2025-05-04T08:19:56.604Z"
    },
    { 
      id: "bf2b7f7c-bbbf-4c4f-91fa-3ff80c3b94bb",
      plate: "KHJ4Z56",
      fleet: "Frota E",
      type: "vehicle",
      model: "HR-V",
      nameOwner: "SUSANA",
      status: "active",
      createdAt: "2025-05-03T07:45:29.411Z"
    },
    { 
      id: "a178bfb4-28ab-44ed-b8fe-dc9f6b684b83",
      plate: "GJS8B99",
      fleet: "Frota E",
      type: "vehicle",
      model: "HR-V",
      nameOwner: "LUCIANA",
      status: "inactive",
      createdAt: "2025-05-01T18:55:14.872Z"
    },
    { 
      id: "d72d5f13-9ac5-47c3-b575-5c18b2b98c8d",
      plate: "TBH2N71",
      fleet: "Frota F",
      type: "vehicle",
      model: "KA",
      nameOwner: "VITOR",
      status: "active",
      createdAt: "2025-05-07T09:34:50.672Z"
    },
    { 
      id: "639ef4ae-30b6-451a-bbb2-ea743b7fa100",
      plate: "NPL9H54",
      fleet: "Frota F",
      type: "vehicle",
      model: "KA",
      nameOwner: "ISABELA",
      status: "inactive",
      createdAt: "2025-05-06T14:42:22.803Z"
    },
    { 
      id: "4cbfeac3-29f1-4634-b01a-e07e3b2b16d9",
      plate: "JGT3P21",
      fleet: "Frota G",
      type: "vehicle",
      model: "S10",
      nameOwner: "GUILHERME",
      status: "active",
      createdAt: "2025-05-05T13:59:44.997Z"
    },
    { 
      id: "87a0c256-6bfc-4a0c-8c27-7b4e30ff7506",
      plate: "XUI4R29",
      fleet: "Frota G",
      type: "vehicle",
      model: "S10",
      nameOwner: "NATALIA",
      status: "inactive",
      createdAt: "2025-05-05T12:38:52.415Z"
    },
    { 
      id: "62bcd7b9-e597-44b3-bcba-95690c07c5a7",
      plate: "UZJ1Q62",
      fleet: "Frota H",
      type: "vehicle",
      model: "FUSCA",
      nameOwner: "GUSTAVO",
      status: "active",
      createdAt: "2025-05-03T16:48:12.500Z"
    },
    { 
      id: "8d5fcbbe-61d1-409a-b98e-d5b4b7dbfd46",
      plate: "RSJ9Z64",
      fleet: "Frota H",
      type: "vehicle",
      model: "FUSCA",
      nameOwner: "FELIPE",
      status: "inactive",
      createdAt: "2025-05-04T10:28:47.321Z"
    },
    { 
      id: "b8b4d79b-1ca4-429e-82ca-74f681f9185d",
      plate: "ZLK1T94",
      fleet: "Frota I",
      type: "vehicle",
      model: "FUSCA",
      nameOwner: "ROBERTO",
      status: "active",
      createdAt: "2025-05-06T08:11:27.234Z"
    },
    { 
      id: "f2c8911f-c209-457f-87b4-8c51f0e4f7f7",
      plate: "BKR8Q62",
      fleet: "Frota I",
      type: "vehicle",
      model: "FUSCA",
      nameOwner: "ALINE",
      status: "inactive",
      createdAt: "2025-05-07T18:50:06.141Z"
    },
    { 
      id: "a8c1a74b-774b-4887-b1cd-8e7c68b75d7f",
      plate: "HTG7M10",
      fleet: "Frota A",
      type: "vehicle",
      model: "FUSCA",
      nameOwner: "PAULO",
      status: "active",
      createdAt: "2025-05-02T13:25:47.512Z"
    },
    { 
      id: "c0b627c8-9b90-4f62-85c2-3e446ad59e2f",
      plate: "BLJ5K32",
      fleet: "Frota A",
      type: "vehicle",
      model: "FUSCA",
      nameOwner: "CARLOS",
      status: "inactive",
      createdAt: "2025-05-03T09:12:18.694Z"
    },
    { 
      id: "cc4d1f95-57f5-4639-bc85-3f6190e6d7c1",
      plate: "UHZ2P45",
      fleet: "Frota B",
      type: "vehicle",
      model: "PALIO",
      nameOwner: "ANDREA",
      status: "active",
      createdAt: "2025-05-06T11:09:54.001Z"
    },
    { 
      id: "a1b2359a-70ea-4c0b-b1db-b6aadd0b9085",
      plate: "JIK9R78",
      fleet: "Frota B",
      type: "vehicle",
      model: "PALIO",
      nameOwner: "FERNANDO",
      status: "inactive",
      createdAt: "2025-05-02T16:39:10.331Z"
    },
    { 
      id: "d9e60e2c-d377-4bff-b6a6-5d3e8c5a03b7",
      plate: "ZKG1J28",
      fleet: "Frota C",
      type: "vehicle",
      model: "CIVIC",
      nameOwner: "JULIA",
      status: "active",
      createdAt: "2025-05-01T10:25:30.492Z"
    },
    { 
      id: "6d3b18b0-418a-4429-9ca5-015d0b1e92de",
      plate: "LVH3R92",
      fleet: "Frota C",
      type: "vehicle",
      model: "CIVIC",
      nameOwner: "MARCELO",
      status: "inactive",
      createdAt: "2025-05-03T15:40:28.389Z"
    },
    { 
      id: "77ab9b88-6112-41c2-b1e4-099ad50c5d23",
      plate: "ATB8S44",
      fleet: "Frota D",
      type: "vehicle",
      model: "COROLLA",
      nameOwner: "RICARDO",
      status: "active",
      createdAt: "2025-05-02T17:31:09.786Z"
    },
    { 
      id: "00f18c2a-5805-4bb5-b0a2-83c1ca57656b",
      plate: "LPY1F73",
      fleet: "Frota D",
      type: "vehicle",
      model: "COROLLA",
      nameOwner: "BRUNA",
      status: "inactive",
      createdAt: "2025-05-04T08:19:56.604Z"
    },
    { 
      id: "bf2b7f7c-bbbf-4c4f-91fa-3ff80c3b94bb",
      plate: "KHJ4Z56",
      fleet: "Frota E",
      type: "vehicle",
      model: "HR-V",
      nameOwner: "SUSANA",
      status: "active",
      createdAt: "2025-05-03T07:45:29.411Z"
    },
    { 
      id: "a178bfb4-28ab-44ed-b8fe-dc9f6b684b83",
      plate: "GJS8B99",
      fleet: "Frota E",
      type: "vehicle",
      model: "HR-V",
      nameOwner: "LUCIANA",
      status: "inactive",
      createdAt: "2025-05-01T18:55:14.872Z"
    },
    { 
      id: "d72d5f13-9ac5-47c3-b575-5c18b2b98c8d",
      plate: "TBH2N71",
      fleet: "Frota F",
      type: "vehicle",
      model: "KA",
      nameOwner: "VITOR",
      status: "active",
      createdAt: "2025-05-07T09:34:50.672Z"
    },
    { 
      id: "639ef4ae-30b6-451a-bbb2-ea743b7fa100",
      plate: "NPL9H54",
      fleet: "Frota F",
      type: "vehicle",
      model: "KA",
      nameOwner: "ISABELA",
      status: "inactive",
      createdAt: "2025-05-06T14:42:22.803Z"
    },
    { 
      id: "4cbfeac3-29f1-4634-b01a-e07e3b2b16d9",
      plate: "JGT3P21",
      fleet: "Frota G",
      type: "vehicle",
      model: "S10",
      nameOwner: "GUILHERME",
      status: "active",
      createdAt: "2025-05-05T13:59:44.997Z"
    },
    { 
      id: "87a0c256-6bfc-4a0c-8c27-7b4e30ff7506",
      plate: "XUI4R29",
      fleet: "Frota G",
      type: "vehicle",
      model: "S10",
      nameOwner: "NATALIA",
      status: "inactive",
      createdAt: "2025-05-05T12:38:52.415Z"
    },
    { 
      id: "62bcd7b9-e597-44b3-bcba-95690c07c5a7",
      plate: "UZJ1Q62",
      fleet: "Frota H",
      type: "vehicle",
      model: "FUSCA",
      nameOwner: "GUSTAVO",
      status: "active",
      createdAt: "2025-05-03T16:48:12.500Z"
    },
    { 
      id: "8d5fcbbe-61d1-409a-b98e-d5b4b7dbfd46",
      plate: "RSJ9Z64",
      fleet: "Frota H",
      type: "vehicle",
      model: "FUSCA",
      nameOwner: "FELIPE",
      status: "inactive",
      createdAt: "2025-05-04T10:28:47.321Z"
    },
    { 
      id: "b8b4d79b-1ca4-429e-82ca-74f681f9185d",
      plate: "ZLK1T94",
      fleet: "Frota I",
      type: "vehicle",
      model: "FUSCA",
      nameOwner: "ROBERTO",
      status: "active",
      createdAt: "2025-05-06T08:11:27.234Z"
    },
    { 
      id: "f2c8911f-c209-457f-87b4-8c51f0e4f7f7",
      plate: "BKR8Q62",
      fleet: "Frota I",
      type: "vehicle",
      model: "FUSCA",
      nameOwner: "ALINE",
      status: "inactive",
      createdAt: "2025-05-07T18:50:06.141Z"
    }
  
      
]

export const columns: ColumnDef<Vehicle>[] = [
 
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
    cell: ({ row }) => <div key={row.getValue("id")} className="uppercase px-4">{row.getValue("plate")}</div>,
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
    accessorKey: "type",
    header: ({column})=>{
      return(
        <Button
        variant="ghost"
        onClick={()=> column.toggleSorting(column.getIsSorted()==="asc")}
        >
            Tipo
            <ArrowUpDown />
        </Button>
        
  
      )
    },
    cell: ({ row }) => <div className="capitalize px-4">{row.getValue("type")}</div>,
  },
  
  {
    accessorKey: "model",
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
    cell: ({ row }) => <div className="capitalize px-4">{row.getValue("model")}</div>,
  },
  {
    accessorKey: "nameOwner",
    header: ({column})=>{
      return(
        <Button
        variant="ghost"
        onClick={()=> column.toggleSorting(column.getIsSorted()==="asc")}
        >
            Locado por 
            <ArrowUpDown />
        </Button>
        
  
      )
    },
    cell: ({ row }) => <div className="capitalize px-4">{row.getValue("nameOwner")}</div>,
  },
  
  {
    accessorKey: "status",
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
    cell: ({ row }) => <div className="capitalize px-4">{row.getValue("status")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
    const vehicle =  row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
              <span className="sr-only">Opções</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
           
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(vehicle.model)}
            >
             Copiar Modelo
            </DropdownMenuItem>
            <DropdownMenuItem
               onClick={() => navigator.clipboard.writeText(vehicle.plate)}
            >  Copiar Placa</DropdownMenuItem>
            <DropdownMenuItem
               onClick={() => navigator.clipboard.writeText(vehicle.fleet? vehicle.fleet : '')}
            >  Copiar Frota</DropdownMenuItem>
            <DropdownMenuItem
               onClick={() => navigator.clipboard.writeText(`Modelo: ${vehicle.model}\n Placa: ${vehicle.plate}\n Frota: ${vehicle.fleet}\n Tipo: ${vehicle.type}\n  Status: ${vehicle.status === "Active"? "Ativo" : "Inativo"}\n Locatário: ${vehicle.nameOwner} `)}
            >
              Copiar Linha
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function VehiclesinLocationLDataTables() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )
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
      default:
        return id;
    }
  };
  console.log(data.length)
  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filtrar por placa ou Frota"
          value={(table.getColumn("model")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("model")?.setFilterValue(event.target.value)
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
