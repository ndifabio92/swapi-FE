import TableComponent from "../table/TableComponent";
import useApiGetAllUrls from "../../hooks/useApiGetAllUrls";
import { headCells } from "../table/headCells/headCellsStarships";
import Loader from "../ui/Loader/Loader";
import { Starship } from "../../interfaces/StarShip";
import { swalAlert } from "../../shared/alerts";

interface Props {
    urls: string[] | undefined
}

const TableStarships = ({ urls }: Props) => {
    const { data, loading, error } = useApiGetAllUrls<Starship>({ urls: urls });

    if (error) swalAlert({ icon: 'error', title: 'Error', text: 'The API call attempt failed.' });

    const array = Object.values(data as Starship[]).map((item) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { edited, films, pilots, url, created, ...rest } = item;
        return rest;
    });

    return (
        <>
            {
                loading ? <Loader isLoading={loading} /> :
                    <TableComponent rows={array} headCells={headCells} />
            }
        </>
    )
}

export default TableStarships;