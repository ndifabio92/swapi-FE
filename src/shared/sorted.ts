interface Props<T> {
    data: T[] | null;
    sortField: keyof T;
    ascending: boolean;
}

export const sortedList = <T>({ data, sortField, ascending }: Props<T>): T[] => {
    if (!data) {
        return [];
    }

    return data.slice().sort((a, b) => {
        const aField = a[sortField];
        const bField = b[sortField];

        if (typeof aField === 'string' && typeof bField === 'string') {
            return ascending ? aField.localeCompare(bField) : bField.localeCompare(aField);
        }

        return 0;
    });
};

