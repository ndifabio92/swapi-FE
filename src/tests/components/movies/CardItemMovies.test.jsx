import React from 'react';
import {render, screen} from "@testing-library/react";
import {CardItemMovies} from "../../../components/movies/CardItemMovies";
import {MemoryRouter} from "react-router-dom";

describe("se testea la generarion del listado de films", () => {
    const item =
        {
            "title": "The Phantom Menace",
            "episode_id": 1,
            "opening_crawl": "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....",
            "director": "George Lucas",
            "producer": "Rick McCallum",
            "release_date": "1999-05-19",
            "characters": [
                "https://swapi.dev/api/people/2/",
            ],
            "planets": [
                "https://swapi.dev/api/planets/1/",
            ],
            "starships": [
                "https://swapi.dev/api/starships/31/",
            ],
            "vehicles": [
                "https://swapi.dev/api/vehicles/33/",
            ],
            "species": [
                "https://swapi.dev/api/species/1/",
            ],
            "created": "2014-12-19T16:52:55.740000Z",
            "edited": "2014-12-20T10:54:07.216000Z",
            "url": "https://swapi.dev/api/films/4/"
        };

    test('debe hacer match con el snapshot', () => {
        const {container} = render(<MemoryRouter><CardItemMovies item={item}/></MemoryRouter>);
        expect(container).toMatchSnapshot();
    });
})