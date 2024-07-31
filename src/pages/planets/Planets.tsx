import { ListComponent } from "../../components/listComponent/ListComponent";
import { CardItemPlanets } from "../../components/planets/CardItemPlanets";

const Planets = () => {
    return (
        <ListComponent
            resource="planets"
            CardComponent={CardItemPlanets}
        />
    )
}

export default Planets;