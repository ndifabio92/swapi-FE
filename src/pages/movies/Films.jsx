import React from "react";
import {swalAlert} from "../../utils/alert";
import {ListComponent} from "../../components/listComponent/ListComponent";
import {CardItemMovies} from "../../components/movies/CardItemMovies";

export const Films = () => {
    return (
        <ListComponent
            resource="films"
            CardComponent={CardItemMovies}
        />
    )
}