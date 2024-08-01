import { ListComponent } from "../../components/listComponent/ListComponent";
import { CardItemPlanets } from "../../components/planets/CardItemPlanets";
import { ResourceType } from "../../components/types/ResourceType";

const Planets = () => {
    return (
        <ListComponent
            resource={ResourceType.Planets}
            CardComponent={CardItemPlanets}
        />
    )
}

export default Planets;