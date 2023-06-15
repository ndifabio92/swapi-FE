import React from "react";
import { ListComponent } from "../../components/listComponent/ListComponent";
import { CardItemCharacter } from "../../components/characters/CardItemCharacter";

const Characters = () => {
    return (
        <ListComponent
            resource="people"
            CardComponent={CardItemCharacter}
        />
    )
}

export default Characters;