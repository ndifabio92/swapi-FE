import { CardItemFilms } from "../../components/films/CardItemFilms";
import { ListComponent } from "../../components/listComponent/ListComponent";
import { ResourceType } from "../../components/types/ResourceType";
import { Result } from "../../interfaces/Film";

type CardComponentType<T> = React.ComponentType<{ item: T }>;

const Films = () => {
    return (
        <ListComponent
            resource={ResourceType.Films}
            CardComponent={CardItemFilms as CardComponentType<Result>}
        />
    )
}

export default Films;