import { FILMS } from '../constants/films';
import { PEOPLE } from '../constants/people';

export const getImage = (resource, title) => {
    const images = {
        "films": FILMS[title],
        "people": PEOPLE[title]
    };

    return images[resource];
};

