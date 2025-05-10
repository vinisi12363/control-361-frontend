import { create } from 'zustand'
import type { Vehicle } from '../types/types';

interface VehiclesPagination extends Partial<Vehicle>{
  data: Vehicle[];
  perPage: number;
  lastResponseCount: number;
  hydrate: (newData: Vehicle[], count:number) => void;
  appendData: (newData: Vehicle[], count:number) => void;
  increasePerPage: () => void;
  clear: () => void;
}
export const useVehiclesStore = create<VehiclesPagination>((set) => ({
  data: [],
  perPage:5,
  lastResponseCount: 0,
  hydrate: (newData , count)=> set({data: newData , lastResponseCount:count}),
  appendData: (newData, count) => set(state => ({ 
  data: [...state.data, ...newData],
  lastResponseCount: count
  })),
  increasePerPage: () => set(state => ({ perPage: state.perPage + 10 })),
  clear: () => set({ data: [], perPage: 5, lastResponseCount: 0 }),
}));