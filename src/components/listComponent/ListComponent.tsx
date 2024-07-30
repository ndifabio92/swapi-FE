import useApiCall from "../../hooks/useApiCall";
import { swalAlert } from "../../shared/alerts";
import Loader from "../ui/Loader/Loader";
import './styles/listComponent.css';
import { sortedList } from "../../shared/sorted";
import { useState } from "react";
import { FormSearch } from "../formSearch/FormSearch";
import { Sort } from "../sort/Sort";

import { People } from "../../interfaces/People";
import { Films } from "../../interfaces/Films";
import { Paginator } from "../pagination/Paginator";

type CardComponentType<T> = React.ComponentType<{ item: T }>;

interface Props<T> {
    resource: string;
    CardComponent: CardComponentType<T>;
    // Otros props que puedas necesitar
}


export const ListComponent = <T,>({ CardComponent, resource }: Props<T>) => {
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const { data, loading, error } = useApiCall<People | Films>(resource, page.toString(), query);
    // const dataSorted = sortedList(data?.results, (resource === "films" ? "title" : "name"), false);
    // const [sortedData, setSortedData] = useState(dataSorted);

    if (error) swalAlert({ icon: 'error', title: 'Error', text: 'The API call attempt failed.' });

    // const register = sortedData ? sortedData : dataSorted;

    const results = data?.results as T[];
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
                                // && <Sort data={sortedData ? sortedData : dataSorted} setSortedData={setSortedData} />
                            }
                        </div>
                        <div className='container-list'>
                            {results.map((item, index) => (
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