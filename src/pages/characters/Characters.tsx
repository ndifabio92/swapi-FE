import { ListComponent } from "../../components/listComponent/ListComponent";
import CardItemCharacter from "../../components/characters/CardItemCharacter";
import { ResourceType } from "../../components/types/ResourceType";

const Characters = () => {
    return (
        <ListComponent
            resource={ResourceType.People}
            CardComponent={CardItemCharacter}
        />
    )
}

export default Characters;