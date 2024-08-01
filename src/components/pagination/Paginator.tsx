import { Pagination } from "@mui/material";
import { getTotalPages, viewRegisters } from "../../shared/paginator";
import './styles/paginator.css'
import { Character } from "../../interfaces/Character";
import { Film } from "../../interfaces/Film";

interface Props {
    page: number,
    handlePageChange: (page: number) => void,
    registers: Character | Film | null
}


export const Paginator = ({ registers, page, handlePageChange }: Props) => {
    const totalPages = registers ? getTotalPages(registers) : 0;
    const { initialRecords, lastRecords } = registers
        ? viewRegisters({ data: registers.results, page })
        : { initialRecords: 0, lastRecords: 0 };

    const handlePageChangeInternal = (_event: React.ChangeEvent<unknown>, value: number) => {
        handlePageChange(value);
    };

    return (
        <div className="container-paginator">
            <Pagination
                className="pagination"
                shape="rounded"
                count={totalPages}
                page={page}
                onChange={handlePageChangeInternal}
            />
            <p className="records">
                {initialRecords} - {lastRecords} of {registers?.count || 0}
            </p>
        </div>
    );
};