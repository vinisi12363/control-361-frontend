import Header from "./components/header";
import Searchlist from "./components/search";
import { VehiclesinLocationLDataTables } from "./components/dataTables/vehicles-inlocation-datatable";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/api/api";
import type { VehiclesResponse } from "../../types/types";
import { useEffect, useState } from "react";
import { VehiclesOthersLDataTables } from "./components/dataTables/vehicle-others-datatable";
import { AnimatePresence, motion } from "framer-motion";
import VehicleMap from "./components/map";
import { useDebounce } from "use-debounce";
import { useDebounceCallback } from "usehooks-ts";
import { useLocationVehiclesStore } from "../../store/useLocationVehiclesStore";
import { toast } from "sonner";
import { useVehiclesStore } from "../../store/useVehiclesStore";

export default function Page() {
  const [filterValue, setFilterValue] = useState<"rastreados" | "outros">(
    "rastreados"
  );
  const [searchTerm, setSearchTerm] = useState("");
  // const [debouncedSearchTerm] = useDebounce(searchTerm, 300); //TODO  usar isso aqui para gerenciar as placas e  frotas
  const { data, perPage, hydrate } =
    useLocationVehiclesStore();
  const {data: vehicleData , hydrate: hydrateVehicle} =
    useVehiclesStore();
  const { data: vehiclesResponse, isFetching } = useQuery({
    queryKey: ["vehicles", perPage],
    queryFn: async () => {
      const response = await api.get("/vehicles", {
        params: {
          type: filterValue === "rastreados" ? "tracked" : "others",
          page: 1,
          perPage: perPage,
        },
      });
      return response.data.data as VehiclesResponse;
    },
  });
  useEffect(() => {
    if (vehiclesResponse) {
      hydrate(
        vehiclesResponse?.content.locationVehicles,
        vehiclesResponse?.content.locationVehicles.length
      );
      hydrateVehicle(
          vehiclesResponse?.content.vehicles,
          vehiclesResponse?.content.vehicles.length
      )
    }
  }, [vehiclesResponse, isFetching]);

  return (
    <AnimatePresence mode="popLayout">
      <div className="flex flex-col items-center gap-4">
        <Header />
        <div className="flex flex-col w-3xl items-center gap-8">
          <Searchlist
            filter={filterValue}
            onFilterChange={(value: string) => {
              if (value === "outros")
                toast.info("O Mapa mostra somente Veículos rastreados.");
              if (value === "rastreados" || value === "outros") {
                setFilterValue(value);
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
            {filterValue === "outros" ? (
              <>
                <div className="bg-zinc-400/40 w-full h-[400px] space-y-1 p-4 rounded-lg">
                  <VehicleMap />
                </div>

                <VehiclesOthersLDataTables
                />
              </>
            ) : (
              <div>
                {data && (
                  <>
                    <div className="bg-zinc-400/40 w-full h-[400px] space-y-1 p-4 rounded-lg">
                      <VehicleMap />
                    </div>
                    <VehiclesinLocationLDataTables />
                  </>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
