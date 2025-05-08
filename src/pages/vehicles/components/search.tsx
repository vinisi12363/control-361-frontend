import { Label, RadioGroup } from "@radix-ui/react-dropdown-menu";
import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

export default function Searchlist() {
  return (
    <div className="flex flex-row w-full justify-between  gap -4">
      <div>
        <h2>Lista</h2>
        {/* <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup> */}
      </div>
      <div className="flex flex-row gap-4" >
      <Input placeholder="Buscar por placa ou frota" />
      <Button
        variant="default"
      >Buscar</Button>
      </div>
   
    </div>
  );
}
