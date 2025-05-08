export type Vehicle = {
  id: string;
  plate: string;
  fleet: string | null;
  type: "vehicle" | "Implemento";
  model: string;
  nameOwner: string;
  status: string;
  createdAt: string;
};

export type LocationVehicles = {
  id: string;
  fleet: string | null;
  equipmentId: string;
  name: string;
  plate: string;
  ignition: "Ligado" | "Desligado";
  lat: number;
  lng: number;
  createdAt: string;
};

export type VehiclesResponse = {
  statusCode: string;
  message: string;
  content: {
    vehicles: Vehicle[];
    locationVehicles: LocationVehicles[];
  };
  totalPage: number;
  page: number;
  perPage: number;
};
