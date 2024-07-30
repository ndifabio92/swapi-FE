import { CardItemFilms } from "../../components/films/CardItemFilms";
import { ListComponent } from "../../components/listComponent/ListComponent";
import { Result } from "../../interfaces/Films";

type CardComponentType<T> = React.ComponentType<{ item: T }>;

const Films = () => {
    return (
        <ListComponent
            resource="films"
            CardComponent={CardItemFilms as CardComponentType<Result>}
        />
    )
}

export default Films;