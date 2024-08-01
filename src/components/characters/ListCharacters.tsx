import { lazy, Suspense } from "react";
import useApiGetAllUrlsFor from "../../hooks/useApiGetAllUrlsFor";
import Loader from "../ui/Loader/Loader";
import { swalAlert } from "../../shared/alerts";
import { Result } from "../../interfaces/Character";
import { sortedList } from "../../shared/sorted";

const CardItemCharacter = lazy(() => import('./CardItemCharacter'));


const ListCharacters = ({ urls }: { urls: string[] | undefined }) => {
    const { data, loading, error } = useApiGetAllUrlsFor<Result>({ urls: urls });
    const dataSorted = sortedList({ data, sortField: "name", ascending: false });

    if (error) swalAlert({ icon: 'error', title: 'Error', text: 'The API call attempt failed.' });
    return (
        <>
            {
                loading ? <Loader isLoading={loading} /> :
                    <div className='container-list'>
                        {
                            dataSorted?.map((item, index) => (
                                <Suspense key={index}>
                                    <CardItemCharacter item={item} key={index} />
                                </Suspense>
                            ))
                        }
                    </div>
            }
        </>
    )
}

export default ListCharacters;