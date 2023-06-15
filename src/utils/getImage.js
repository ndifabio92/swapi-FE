import { FILMS } from '../constants/films';
import { CHARACTERS } from '../constants/characters';
import {PLANETS} from "../constants/planets";
import {VEHICLES} from "../constants/vehicles";
import {STARSHIPS} from "../constants/starships";

import image_not_found from "../assets/images/not_found/image_not_found.jpg"

export const getImage = (resource, title) => {
    const images = {
        "films": FILMS[title],
        "characters": CHARACTERS[title],
        "planets": PLANETS[title],
        "vehicles": VEHICLES[title],
        "starships": STARSHIPS[title]
    };

    return images[resource] || image_not_found;
};

