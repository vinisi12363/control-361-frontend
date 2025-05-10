import Header from "./components/header";
import Searchlist from "./components/search";
import { VehiclesinLocationLDataTables } from "./components/dataTables/vehicles-inlocation-datatable";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/api/api";
import type {
  VehiclesResponse,
} from "../../types/types";
import { useState } from "react";
import { VehiclesOthersLDataTables } from "./components/dataTables/vehicle-others-datatable";
import { AnimatePresence, motion } from "framer-motion";
import VehicleMap from "./components/map";
import { useDebounce } from "use-debounce";

export default function Page() {
  const [filterValue, setFilterValue] = useState<"rastreados" | "outros">("rastreados");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);
  const [mapMounted, setMapMounted] = useState(false);

  const { data: vehiclesResponse, } = useQuery({
    queryKey: ["vehicles", filterValue, debouncedSearchTerm],
    queryFn: async () => {
      const response = await api.get("/vehicles", {
        params: {
          type: filterValue === "rastreados" ? "tracked" : "others",
          search: debouncedSearchTerm,
          page: 1,
          perPage: 20,
        },
      });
      return response.data.data as VehiclesResponse;
    },
  });

  return (
    <AnimatePresence mode="popLayout">
      <div className="flex flex-col items-center gap-4">
        <Header />
        <div className="flex flex-col w-3xl items-center gap-8">
          <Searchlist
            filter={filterValue}
            onFilterChange={(value: string) => {
                if (value === "rastreados" || value === "outros") {
                setFilterValue(value)
                }
            }}
            onSearch={setSearchTerm}
          />

          <motion.div
            key={filterValue}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {filterValue !== "rastreados" ? (
              <VehiclesOthersLDataTables 
                vehicles={vehiclesResponse?.content.vehicles || []} 
              />
            ) : (
              <div>  
                <div className="bg-zinc-800/40 w-full h-[400px] space-y-1 p-4 rounded-lg">
                  <VehicleMap
                    locatedVehicles={vehiclesResponse?.content.locationVehicles || []}
                    afterMount={setMapMounted}
                  />
                </div>
                <VehiclesinLocationLDataTables
                  locatedVehicles={vehiclesResponse?.content.locationVehicles || []}
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}