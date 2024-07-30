import { People, Result } from "../interfaces/People";

interface Props {
    data: People;
    sortField: keyof Result;
    ascending: boolean;
}

export const sortedList = ({ data, sortField, ascending }: Props): Result[] => {
    return data.results.slice().sort((a, b) => {
        const aField = a[sortField];
        const bField = b[sortField];

        if (typeof aField === 'string' && typeof bField === 'string') {
            return ascending ? aField.localeCompare(bField) : bField.localeCompare(aField);
        }

        return 0;
    });
};
