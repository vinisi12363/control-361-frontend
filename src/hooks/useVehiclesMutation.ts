import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api/api";
import type { VehiclesResponse } from "../types/types";
import { useVehiclesStore } from "../store/useVehiclesStore";

export const useVehiclesMutation = () => {
  const { hydrate, appendData } = useVehiclesStore();
  const initialPerpageValue = 5 //valor inicial da perPage. 
  
  return useMutation({
    mutationFn: async (params: { type:"others"; page: number; perPage: number }) => {
      const response = await api.get('/vehicles', { params });
      return response.data.data as VehiclesResponse;
    },
    onSuccess: (data, variables) => {
      variables.perPage === initialPerpageValue 
        ? hydrate(data.content.vehicles, data.content.vehicles.length)
        : appendData(data.content.vehicles,  data.content.vehicles.length);
    }
  });
};