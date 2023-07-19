import useApiCall from "../../../hooks/useApiCall";
import {render} from "@testing-library/react";
import {ListComponent} from "../../../components/listComponent/ListComponent";
import {CardItemMovies} from "../../../components/movies/CardItemMovies";

describe("Test on <FilmDetail />", () => {
    test('loading', () => {

        useApiCall('films',1,"").mockReturnValue({
            data: [],
            isLoading:true,
            error:false
        });

        render( <ListComponent resource="films" CardComponent={CardItemMovies}/>)
        screen.debug();
    })
})