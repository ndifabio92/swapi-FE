import React from "react";
import {ListComponent} from "../../components/listComponent/ListComponent";
import {CardItemVehicles} from "../../components/vehicles/CardItemVehicles";

export const Vehicles = () => {
    return (
        <ListComponent
            resource="vehicles"
            CardComponent={CardItemVehicles}
        />
    )
}