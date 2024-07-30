import { FILMS } from '../constants/fimls';
import { CHARACTERS } from '../constants/characters';
import { PLANETS } from "../constants/planets";
import { VEHICLES } from "../constants/vehicles";
import { STARSHIPS } from "../constants/starships";

import image_not_found from "../assets/images/not_found/image_not_found.jpg"

interface Props {
    resource: string,
    title?: string
}

const images: { [key: string]: { [key: string]: string } } = {
    "films": FILMS,
    "characters": CHARACTERS,
    "planets": PLANETS,
    "vehicles": VEHICLES,
    "starships": STARSHIPS
};

export const getImage = ({ resource, title }: Props) => {
    if (title === undefined) {
        return image_not_found;
    }
    return images[resource]?.[title] || image_not_found;
};