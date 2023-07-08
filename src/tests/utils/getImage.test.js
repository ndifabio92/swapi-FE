import {FILMS} from "../../constants/films";
import {getImage} from "../../utils/getImage";
import image_not_found from "../../assets/images/not_found/image_not_found.jpg";

describe('getImage', () => {
    test('should return the correct image for a given resource and title', () => {
        const resource = 'films';
        const title = 'The Phantom Menace';
        const expectedImage = FILMS[title];

        const result = getImage(resource, title);

        expect(result).toEqual(expectedImage);
    });

    test('should return the "image_not_found" for an unknown resource', () => {
        const resource = 'unknown';
        const title = 'Some Title';

        const result = getImage(resource, title);

        expect(result).toEqual(image_not_found);
    });
});