import { ListComponent } from "../../components/listComponent/ListComponent";
import { CardItemStarships } from "../../components/starships/CardItemStarships";

const Starships = () => {
    return (
        <ListComponent
            resource="starships"
            CardComponent={CardItemStarships}
        />
    )
}
export default Starships;