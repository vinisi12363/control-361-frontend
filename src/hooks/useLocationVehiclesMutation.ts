import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api/api";
import type { VehiclesResponse } from "../types/types";
import { useLocationVehiclesStore } from "../store/useLocationVehiclesStore";

export const useLocationVehiclesMutation = () => {
  const { hydrate, appendData } = useLocationVehiclesStore();
  const initialPerpageValue = 5; //valor inicial da perPage. 
  
  return useMutation({
    mutationFn: async (params: { type?:"tracked"; page: number; perPage: number }) => {
      const response = await api.get('/vehicles', { params });
      return response.data.data as VehiclesResponse;
    },
    onSuccess: (data, variables) => {
      variables.perPage === initialPerpageValue 
        ? hydrate(data.content.locationVehicles, data.content.locationVehicles.length)
        : appendData(data.content.locationVehicles, data.content.locationVehicles.length);
    }
  });
};