import { ListComponent } from "../../components/listComponent/ListComponent";
import { ResourceType } from "../../components/types/ResourceType";
import { CardItemVehicles } from "../../components/vehicles/CardItemVehicles";

const Vehicles = () => {
    return (
        <ListComponent
            resource={ResourceType.Vehicles}
            CardComponent={CardItemVehicles}
        />
    )
}

export default Vehicles;