import { ListComponent } from "../../components/listComponent/ListComponent";
import { CardItemStarships } from "../../components/starships/CardItemStarships";
import { ResourceType } from "../../components/types/ResourceType";

const Starships = () => {
    return (
        <ListComponent
            resource={ResourceType.Starships}
            CardComponent={CardItemStarships}
        />
    )
}
export default Starships;