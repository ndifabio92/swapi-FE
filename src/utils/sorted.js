export const sortedList = (data, sortField, ascending) => data?.results?.sort((a, b) => {
    if (ascending) return a[sortField].localeCompare(b[sortField]);
    return b[sortField].localeCompare(a[sortField]);
});