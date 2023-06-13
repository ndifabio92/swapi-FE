import React from "react";
import {ListComponent} from "../../components/listComponent/ListComponent";
import {CardItemPeople} from "../../components/people/CardItemPeople";

export const People = () => {
    return (
        <ListComponent
            resource="people"
            CardComponent={CardItemPeople}
        />
    )
}