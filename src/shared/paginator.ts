import { Films, Result as ResultFilms } from "../interfaces/Film";
import { People, Result as ResultPeople } from "../interfaces/People";

interface ViewRegistersParams {
    data: ResultFilms[] | ResultPeople[] | null; // Puedes reemplazar `any` con el tipo específico de los elementos de `data`
    page: number;
}


export const getTotalPages = (data: People | Films) => {
    if (!data) return 0;

    const totalRegisters = data.count;
    const pageSize = 10;

    if (totalRegisters === 0) return 0;

    return Math.ceil(totalRegisters / pageSize);
};

export const viewRegisters = ({ data, page }: ViewRegistersParams) => {
    if (!data || data.length === 0) {
        return { initialRecords: 0, lastRecords: 0 };
    }

    const totalItems = data.length;
    const pageSize = 10;

    if (totalItems <= pageSize) {
        const lastRecords = totalItems;
        const initialRecords = 1;

        return { initialRecords, lastRecords };
    }

    const initialRecords = (page - 1) * pageSize + 1;
    const lastRecords = Math.min(page * pageSize, totalItems);

    return { initialRecords, lastRecords };
};