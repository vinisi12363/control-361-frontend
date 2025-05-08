import * as React from "react"
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
import { Checkbox } from "../../../../components/ui/checkbox"
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
import type { LocationVehicles, Vehicle } from "../../../../types/types"

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@example.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@example.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@example.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@example.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
  },
]
const vehicles: Vehicle[] = [

  
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
const locationVehicles: LocationVehicles[]= [
  {
      id: "aec5429c-2242-4e83-b626-4e15d128d766",
      fleet: "520",
      equipmentId: "20210121164142",
      name: "3S",
      plate: "BHT2D21",
      ignition: "Ligado",
      lat: -23.9213751,
      lng: -46.4130056,
      createdAt: "2025-05-08T19:05:00.410Z"
  },
  {
      id: "aec5429c-2242-4e83-b626-4e15d128d766",
      fleet: "520",
      equipmentId: "1598543",
      name: "SASCAR",
      plate: "BHT2D21",
      ignition: "Ligado",
      lat: -23.9214363,
      lng: -46.4129113,
      createdAt: "2025-05-08T19:05:01.959Z"
  },
  {
      id: "16554efa-516e-4611-8536-bd9fa65b673d",
      fleet: "522",
      equipmentId: "20210219174026",
      name: "3S",
      plate: "BSZ4I45",
      ignition: "Desligado",
      lat: -22.5574431,
      lng: -47.3805956,
      createdAt: "2025-05-08T19:05:00.331Z"
  },
  {
      id: "16554efa-516e-4611-8536-bd9fa65b673d",
      fleet: "522",
      equipmentId: "1606850",
      name: "SASCAR",
      plate: "BSZ4I45",
      ignition: "Desligado",
      lat: -22.557301,
      lng: -47.3807043,
      createdAt: "2025-05-06T18:05:00.478Z"
  },
  {
      id: "dd652e6d-ab48-4b9d-b13d-842d2eb2b1ca",
      fleet: "471",
      equipmentId: "20210319191526",
      name: "3S",
      plate: "BZG9391",
      ignition: "Ligado",
      lat: -23.8125201,
      lng: -46.5855983,
      createdAt: "2025-05-08T19:05:00.414Z"
  },
  {
      id: "dd652e6d-ab48-4b9d-b13d-842d2eb2b1ca",
      fleet: "471",
      equipmentId: "1407236",
      name: "SASCAR",
      plate: "BZG9391",
      ignition: "Ligado",
      lat: -23.799183,
      lng: -46.5918198,
      createdAt: "2025-05-08T19:05:01.672Z"
  },
  {
      id: "660fb730-fc68-4f18-be00-16d84b650124",
      fleet: "523",
      equipmentId: "20210319175246",
      name: "3S",
      plate: "CUA3H57",
      ignition: "Desligado",
      lat: -22.494132,
      lng: -47.4224471,
      createdAt: "2025-05-08T19:05:00.396Z"
  },
  {
      id: "660fb730-fc68-4f18-be00-16d84b650124",
      fleet: "523",
      equipmentId: "1598538",
      name: "SASCAR",
      plate: "CUA3H57",
      ignition: "Desligado",
      lat: -22.493876,
      lng: -47.4223656,
      createdAt: "2025-05-08T19:00:01.189Z"
  },
  {
      id: "f25b87cc-504d-415a-826e-4c1c1dadf5fd",
      fleet: "524",
      equipmentId: "1598539",
      name: "SASCAR",
      plate: "DJM4C27",
      ignition: "Desligado",
      lat: -23.922928,
      lng: -46.3818083,
      createdAt: "2025-05-08T18:45:00.736Z"
  },
  {
      id: "dc507b40-be68-443c-a7e3-100101bd25bd",
      fleet: "672",
      equipmentId: "1899087",
      name: "SASCAR",
      plate: "DXV0D74",
      ignition: "Ligado",
      lat: -23.2053291,
      lng: -46.8004578,
      createdAt: "2025-05-08T18:10:00.705Z"
  },
  {
      id: "9b9b2342-521a-4a60-828b-32bf2c5d9f5a",
      fleet: "484",
      equipmentId: "20210721133023",
      name: "3S",
      plate: "DYW7814",
      ignition: "Desligado",
      lat: -22.5572723,
      lng: -47.3806746,
      createdAt: "2025-05-08T19:05:00.376Z"
  },
  {
      id: "9b9b2342-521a-4a60-828b-32bf2c5d9f5a",
      fleet: "484",
      equipmentId: "1414260",
      name: "SASCAR",
      plate: "DYW7814",
      ignition: "Desligado",
      lat: -22.5572565,
      lng: -47.3807681,
      createdAt: "2025-05-07T23:10:00.656Z"
  },
  {
      id: "384ecedd-8490-467e-928b-6b3a965f2d7d",
      fleet: "567",
      equipmentId: "20211016145856",
      name: "3S",
      plate: "EIL3H43",
      ignition: "Ligado",
      lat: -18.4780233,
      lng: -49.1884115,
      createdAt: "2025-05-08T19:05:00.380Z"
  },
  {
      id: "384ecedd-8490-467e-928b-6b3a965f2d7d",
      fleet: "567",
      equipmentId: "1692770",
      name: "SASCAR",
      plate: "EIL3H43",
      ignition: "Ligado",
      lat: -22.484651,
      lng: -47.4600878,
      createdAt: "2025-05-08T18:45:00.800Z"
  },
  {
      id: "4c07170f-e64e-4579-96ef-b68fa4d2d0a4",
      fleet: "662",
      equipmentId: "1847839",
      name: "SASCAR",
      plate: "RVT4F05",
      ignition: "Ligado",
      lat: -23.3361291,
      lng: -46.8222363,
      createdAt: "2025-05-08T19:05:01.929Z"
  },
  {
      id: "47b5619e-53dc-4491-86fd-298aef3135f4",
      fleet: "663",
      equipmentId: "1847840",
      name: "SASCAR",
      plate: "RVT4F06",
      ignition: "Desligado",
      lat: -22.4943261,
      lng: -47.4234541,
      createdAt: "2025-05-08T19:05:01.798Z"
  }
]

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function VehicleDataTables() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

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

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
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
                    {column.id}
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
