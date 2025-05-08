import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "../../../components/ui/table"
  
  const vehicles = [
    {
      placa: "EAD 7328",
      frota: "00001",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em viagem"
    },
    {
      placa: "EAD 7328",
      frota: "00002",
      tipo: "Implemento",
      modelo: "F MAX Select",
      status: "Em Manutenção"
    },
    // +50 veículos gerados abaixo
    {
      placa: "JKE 4185",
      frota: "00003",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em viagem"
    },
    {
      placa: "LHQ 1034",
      frota: "00004",
      tipo: "Implemento",
      modelo: "F MAX Select",
      status: "Em Manutenção"
    },
    {
      placa: "MSB 6712",
      frota: "00005",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em Manutenção"
    },
    {
      placa: "ZXC 8590",
      frota: "00006",
      tipo: "Implemento",
      modelo: "F MAX Select",
      status: "Em viagem"
    },
    {
      placa: "VBN 4723",
      frota: "00007",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em viagem"
    },
    {
      placa: "GTR 9831",
      frota: "00008",
      tipo: "Implemento",
      modelo: "F MAX Select",
      status: "Em Manutenção"
    },
    {
      placa: "PLO 1587",
      frota: "00009",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em viagem"
    },
    {
      placa: "IUY 6243",
      frota: "00010",
      tipo: "Implemento",
      modelo: "F MAX Select",
      status: "Em viagem"
    },
    {
      placa: "WER 5489",
      frota: "00011",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em Manutenção"
    },
    {
      placa: "BNM 1245",
      frota: "00012",
      tipo: "Implemento",
      modelo: "F MAX Select",
      status: "Em viagem"
    },
    {
      placa: "TRE 9276",
      frota: "00013",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em viagem"
    },
    {
      placa: "GHJ 0923",
      frota: "00014",
      tipo: "Implemento",
      modelo: "F MAX Select",
      status: "Em Manutenção"
    },
    {
      placa: "PLM 6810",
      frota: "00015",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em Manutenção"
    },
    {
      placa: "AXD 3011",
      frota: "00016",
      tipo: "Implemento",
      modelo: "F MAX Select",
      status: "Em viagem"
    },
    {
      placa: "QWE 4000",
      frota: "00017",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em viagem"
    },
    {
      placa: "SDF 2334",
      frota: "00018",
      tipo: "Implemento",
      modelo: "F MAX Select",
      status: "Em Manutenção"
    },
    {
      placa: "ZXC 4432",
      frota: "00019",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em viagem"
    },
    {
      placa: "ASD 1942",
      frota: "00020",
      tipo: "Implemento",
      modelo: "F MAX Select",
      status: "Em Manutenção"
    },
    {
      placa: "JUI 8383",
      frota: "00021",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em viagem"
    },
    {
      placa: "NMB 2837",
      frota: "00022",
      tipo: "Implemento",
      modelo: "F MAX Select",
      status: "Em Manutenção"
    },
    {
      placa: "LKS 8291",
      frota: "00023",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em Manutenção"
    },
    {
      placa: "AWE 1932",
      frota: "00024",
      tipo: "Implemento",
      modelo: "F MAX Select",
      status: "Em viagem"
    },
    {
      placa: "MKL 7420",
      frota: "00025",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em viagem"
    },
    {
      placa: "HGT 5984",
      frota: "00026",
      tipo: "Implemento",
      modelo: "F MAX Select",
      status: "Em Manutenção"
    },
    {
      placa: "OLP 3382",
      frota: "00027",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em viagem"
    },
    {
      placa: "UYH 8756",
      frota: "00028",
      tipo: "Implemento",
      modelo: "F MAX Select",
      status: "Em viagem"
    },
    {
      placa: "REQ 1276",
      frota: "00029",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em Manutenção"
    },
    {
      placa: "TGB 4153",
      frota: "00030",
      tipo: "Implemento",
      modelo: "F MAX Select",
      status: "Em viagem"
    },
    {
      placa: "XCV 7654",
      frota: "00031",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em viagem"
    },
    {
      placa: "PLK 9082",
      frota: "00032",
      tipo: "Implemento",
      modelo: "F MAX Select",
      status: "Em Manutenção"
    },
    {
      placa: "VBM 3021",
      frota: "00033",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em viagem"
    },
    {
      placa: "NHG 2018",
      frota: "00034",
      tipo: "Implemento",
      modelo: "F MAX Select",
      status: "Em Manutenção"
    },
    {
      placa: "BGT 1403",
      frota: "00035",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em viagem"
    },
    {
      placa: "IKJ 3621",
      frota: "00036",
      tipo: "Implemento",
      modelo: "F MAX Select",
      status: "Em viagem"
    },
    {
      placa: "ZWE 2301",
      frota: "00037",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em Manutenção"
    },
    {
      placa: "TUI 4763",
      frota: "00038",
      tipo: "Implemento",
      modelo: "F MAX Select",
      status: "Em Manutenção"
    },
    {
      placa: "GHY 9134",
      frota: "00039",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em viagem"
    },
    {
      placa: "KLO 1053",
      frota: "00040",
      tipo: "Implemento",
      modelo: "F MAX Select",
      status: "Em viagem"
    },
    {
      placa: "UYT 6534",
      frota: "00041",
      tipo: "Motor",
      modelo: "FH 480",
      status: "Em Manutenção"
    },
  ]  
  
  export function TableList() {
    return (
      <Table>
        <TableCaption>Lista da </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead >Placa</TableHead>
            <TableHead>Frota</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Modelo</TableHead>
            <TableHead >Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vehicles.map((vehicle) => (
            <TableRow key={vehicle.frota}>
              <TableCell >{vehicle.placa}</TableCell>
              <TableCell>{vehicle.frota}</TableCell>
              <TableCell>{vehicle.tipo}</TableCell>
              <TableCell>{vehicle.modelo}</TableCell>
              <TableCell >{vehicle.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  