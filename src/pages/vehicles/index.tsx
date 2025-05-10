import Header from "./components/header";
import Searchlist from "./components/search";
import { VehiclesinLocationLDataTables } from "./components/dataTables/vehicles-inlocation-datatable";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/api/api";
import type { LocationVehicles, VehiclesResponse } from "../../types/types";
import { useEffect, useState } from "react";
import { VehiclesOthersLDataTables } from "./components/dataTables/vehicle-others-datatable";
import { AnimatePresence, motion } from "framer-motion";
import VehicleMap from "./components/map";
import { useDebounce } from "use-debounce";
import { useDebounceCallback } from "usehooks-ts";

export default function Page() {
  const [filterValue, setFilterValue] = useState<"rastreados" | "outros">(
    "rastreados"
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300); //TODO  usar isso aqui para gerenciar as placas e  frotas
  const [perPage, setPerPage] = useState(4);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1)
  const [allLocatedVehicles, setAllLocatedVehicles] = useState<
    LocationVehicles[]
  >([]);
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
  console.log("veiculos", isFetching, vehiclesResponse)
//   useEffect(() => {
//     if (!isFetching) {
//       setAllLocatedVehicles(vehiclesResponse?.content?.locationVehicles);
//     }
//   }, [vehiclesResponse, isFetching]);

  const handleLoadMore = useDebounceCallback(() => {
    setPerPage((prev) => prev + 2);
    setPage((prev)=>prev+1)
  }, 5000);

  return (
    <AnimatePresence mode="popLayout">
      <div className="flex flex-col items-center gap-4">
        <Header />
        <div className="flex flex-col w-3xl items-center gap-8">
          <Searchlist
            filter={filterValue}
            onFilterChange={(value: string) => {
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
              <VehiclesOthersLDataTables
                vehicles={vehiclesResponse?.content.vehicles || []}
              />
            ) : (
              <div>
                {
                    vehiclesResponse && (<>
                     <div className="bg-zinc-800/40 w-full h-[400px] space-y-1 p-4 rounded-lg">
                  <VehicleMap
                    locatedVehicles={
                      vehiclesResponse?.content.locationVehicles || []
                    }
                  />
                </div>
                <VehiclesinLocationLDataTables
                  locatedVehicles={ vehiclesResponse?.content.locationVehicles || []}
                  onLoadMore={handleLoadMore}
                  hasMore={hasMore}
                /></>)
                }
               
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
