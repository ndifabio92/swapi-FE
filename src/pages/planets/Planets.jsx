import React from "react";
import {ListComponent} from "../../components/listComponent/ListComponent";
import {CardItemPlanets} from "../../components/planets/CardItemPlanets";

export const Planets = () => {
    return (
        <ListComponent
            resource="planets"
            CardComponent={CardItemPlanets}
        />
    )
}