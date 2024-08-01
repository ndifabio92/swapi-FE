import useApiCall from "../../hooks/useApiCall";
import { swalAlert } from "../../shared/alerts";
import Loader from "../ui/Loader/Loader";
import { useState } from "react";
import { FormSearch } from "../formSearch/FormSearch";

import { Character } from "../../interfaces/Character";
import { Film } from "../../interfaces/Film";
import { Paginator } from "../pagination/Paginator";

import { ResourceType } from "../types/ResourceType";
import { sortedList } from "../../shared/sorted";

import './styles/listComponent.css';


type CardComponentType<T> = React.ComponentType<{ item: T }>;

interface Props<T> {
    resource: string;
    CardComponent: CardComponentType<T>;
}


export const ListComponent = <T,>({ CardComponent, resource }: Props<T>) => {
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const { data, loading, error } = useApiCall<Character | Film>(resource, page.toString(), query);
    const sortField = resource === ResourceType.Films ? "title" : "name";
    const results = data?.results as [];

    const dataSorted = sortedList({ data: results, sortField: sortField, ascending: false });
    if (error) swalAlert({ icon: 'error', title: 'Error', text: 'The API call attempt failed.' });

    // const [sortedData, setSortedData] = useState(dataSorted);


    // const register = sortedData.length > 0 ? sortedData : dataSorted;

    return (
        <>
            {
                loading ? <Loader isLoading={loading} />
                    :
                    <>
                        <div className="container-header">
                            <FormSearch query={query} setQuery={setQuery} />
                            {
                                data?.count !== 0
                                // && <Sort data={sortedData} isFilm={sortField === "title"} setSortedData={setSortedData} />
                            }
                        </div>
                        <div className='container-list'>
                            {dataSorted.map((item, index) => (
                                <CardComponent item={item} key={index} />
                            ))}
                        </div>
                        {
                            data?.count !== 0 && <Paginator registers={data} handlePageChange={setPage} page={page} />
                        }
                    </>
            }
        </>

    );
};