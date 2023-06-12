import { FILMS } from './films';

export const getImage = (resource, title) => {
    const images = {
        "films": FILMS[title]
    };

    return images[resource];
};

