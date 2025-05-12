import { create } from 'zustand'
import type { LocationVehicles } from '../types/types';

interface LocationVehiclesPagination extends Partial<LocationVehicles>{
  data: LocationVehicles[];
  perPage: number;
  lastResponseCount: number;
  hydrate: (newData: LocationVehicles[], count:number) => void;
  appendData: (newData: LocationVehicles[], count:number) => void;
  increasePerPage: () => void;
  clear: () => void;
}
export const useLocationVehiclesStore = create<LocationVehiclesPagination>((set) => ({
  data: [],
  perPage:8,
  lastResponseCount: 0,
  hydrate: (newData )=> set({data: newData , lastResponseCount:newData.length}),
  appendData: (newData) => set(state => ({ 
  data: [...state.data, ...newData],
  lastResponseCount: newData.length,
  perPage: newData.length
  })),
  increasePerPage: () => set(state => ({ perPage: state.perPage + 2 })),
  clear: () => set({ data: [], perPage: 5, lastResponseCount: 0 }),
}));