import TableComponent from "../table/TableComponent";
import useApiGetAllUrls from "../../hooks/useApiGetAllUrls";
import { headCells } from "../table/headCells/headCellsVehicles";
import Loader from "../ui/Loader/Loader";
import { swalAlert } from "../../shared/alerts";
import { Vehicle } from '../../interfaces/Vehicle';

interface Props {
    urls: string[] | undefined
}

const TableVehicles = ({ urls }: Props) => {
    const { data, loading, error } = useApiGetAllUrls<Vehicle>({ urls: urls });

    if (error) swalAlert({ icon: 'error', title: 'Error', text: 'The API call attempt failed.' });

    const array = Object.values(data as Vehicle[]).map((item) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { edited, films, pilots, url, created, ...rest } = item;
        return rest;
    })

    return (
        <>
            {
                loading ? <Loader isLoading={loading} /> :
                    <TableComponent rows={array} headCells={headCells} />
            }
        </>
    )
}

export default TableVehicles;