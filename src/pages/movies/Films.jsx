import React from "react";
import { ListComponent } from "../../components/listComponent/ListComponent";
import { CardItemMovies } from "../../components/movies/CardItemMovies";

const Films = () => {
    return (
        <ListComponent
            resource="films"
            CardComponent={CardItemMovies}
        />
    )
}

export default Films;