import Header from "./components/header";
import Map from "./components/map";
import Searchlist from "./components/search";
import { VehiclesinLocationLDataTables } from "./components/dataTables/vehicles-inlocation-datatable";

export default function Page(){
    return(

        <div className="flex flex-col items-center gap-4">
                <Header/>
                <div className="flex flex-col w-3xl items-center gap-8 ">
                    <Searchlist/>
                  
                    <VehiclesinLocationLDataTables/>
                </div>
             
        </div>

    );
}