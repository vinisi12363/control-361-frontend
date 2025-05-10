// import { GoogleMap, Marker, useLoadScript, InfoWindow } from "@react-google-maps/api";
// import { useState } from "react";
// import { env } from "../../../lib/env";
// import type { LocationVehicles } from "../../../types/types";
// import { Card, CardContent } from "../../../components/ui/card";
// import { Skeleton } from "../../../components/ui/skeleton";

// const containerStyle = {
//   width: "95%",
//   height: "500px",

// };

// const center = {
//   lat: -22.5497888,
//   lng: -48.8173613,
// };

// interface MapsProps {
//   locatedVehicles: LocationVehicles[];
// }

// export default function VehicleMap({ locatedVehicles }: MapsProps) {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: `${env.VITE_GOOGLE_API_KEY}`,
//   });

//   const [selectedVehicle, setSelectedVehicle] = useState<LocationVehicles | null>(null);

//   if (!isLoaded) return <div>Carregando mapa...</div>;

//   return (
//     <CardContent>
//         {isLoaded ? (     <Card className="aspect-auto rounded-2xl ">
//             <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
//                 {locatedVehicles.map((vehicle) => (
//                     <Marker
//                     key={vehicle.id}
//                     position={{ lat: vehicle.lat, lng: vehicle.lng }}
//                     icon={{
//                         url: "/icons/car.svg",
//                         scaledSize: new window.google.maps.Size(30, 30),
//                         fillColor:"ff3333",
//                         fillOpacity:1,
//                         strokeWeight:2
//                     }}
//                     onClick={() => setSelectedVehicle(vehicle)}
//                     />
//                 ))}

//                 {selectedVehicle && (
//                     <InfoWindow

//                     position={{ lat: selectedVehicle.lat, lng: selectedVehicle.lng }}
//                     onCloseClick={() => setSelectedVehicle(null)}
//                     >
//                     <div  className="flex flex-col text-sm w-full p-4 gap-2 rounded-lg bg-zinc-800 items-center space-y-1">

//                         <p><strong>Placa:</strong> {selectedVehicle.plate}</p>
//                         <p><strong>Frota:</strong> {selectedVehicle.fleet ?? "N/A"}</p>

//                         <p> {new Date(selectedVehicle.createdAt).toLocaleString()}</p>

//                         <p className="underline decoration-2">{ `${selectedVehicle.lat.toFixed(6)}, ${selectedVehicle.lng.toFixed(6)}`}</p>

//                     </div>
//                     </InfoWindow>
//                 )}
//                 </GoogleMap>
//         </Card>
//     ):(
//         <div>
//             <Skeleton/>
//         </div>

//     )}

//     </CardContent>

//   );
// }
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import type { LocationVehicles } from "../../../types/types";
import { env } from "../../../lib/env";
import ReactDOMServer from "react-dom/server";
import IconMaker from "../../../components/IconMaker";

const containerStyle = {
  width: "100%",
  height: "360px",
};

const center = {
  lat: -22.5497146,
  lng: -48.8173376,
};
interface VehicleIcon {
  svgBase64: string;
}
interface MapsProps {
  afterMount: (mounted: boolean) => void;
  locatedVehicles: LocationVehicles[];
}
const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F39C12",
  "#8E44AD",
  "#E91E63",
  "#00BCD4",
  "#FFC107",
  "#4CAF50",
  "#FF9800",
  "#9C27B0",
  "#03A9F4",
  "#CDDC39",
  "#673AB7",
  "#FFEB3B",
  "#009688",
  "#FF5722",
  "#C2185B",
  "#3F51B5",
  "#00E676",
  "#D32F2F",
  "#1976D2",
  "#C51162",
  "#43A047",
  "#7C4DFF",
  "#F44336",
  "#0097A7",
  "#AEEA00",
  "#FF6F00",
  "#1DE9B6",
];

const VehicleMap: React.FC<MapsProps> = ({ locatedVehicles, afterMount }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: `${env.VITE_GOOGLE_API_KEY}`,
  });
  const [vehicleIcons, setVehicleIcons] = useState<VehicleIcon[]>([]);
  const [selectedVehicle, setSelectedVehicle] =
    useState<LocationVehicles | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  useEffect(() => {
    if (isLoaded && locatedVehicles) {
      const icons = locatedVehicles.map((vehicle, index) => {
        const svgCar = ReactDOMServer.renderToStaticMarkup(
          <IconMaker
            fillColor={colors[index % colors.length]}
            icon="/icons/car.svg"
          />
        );
        return {
          svgBase64: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
            svgCar
          )}`,
        };
      });
      setVehicleIcons(icons);
      afterMount(true);
    }
  }, [isLoaded, locatedVehicles]);

  if (!isLoaded || vehicleIcons.length === 0)
    return <div>Carregando mapa...</div>;
  console.log(vehicleIcons);
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={30}
      onLoad={onLoad}
    >
      {locatedVehicles.map((vehicle, index) => (
        <Marker
          position={{ lat: vehicle.lat, lng: vehicle.lng }}
          icon={{
            url: vehicleIcons[index]?.svgBase64,
            scaledSize: new google.maps.Size(40, 40),
            anchor: new google.maps.Point(0, 0),
          }}
          onClick={() => setSelectedVehicle(vehicle)}
        />
      ))}

      {selectedVehicle && (
        <InfoWindow
          position={{ lat: selectedVehicle.lat, lng: selectedVehicle.lng }}
          onCloseClick={() => setSelectedVehicle(null)}
        >
          <div className="flex flex-col text-sm w-full p-4 gap-2 rounded-lg bg-zinc-800 items-center space-y-1">
            <p>
              <strong>Placa:</strong> {selectedVehicle.plate}
            </p>
            <p>
              <strong>Frota:</strong> {selectedVehicle.fleet ?? "N/A"}
            </p>
            <p> {new Date(selectedVehicle.createdAt).toLocaleString()}</p>

            <p className="underline decoration-2">{`${selectedVehicle.lat.toFixed(
              6
            )}, ${selectedVehicle.lng.toFixed(6)}`}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default VehicleMap;
