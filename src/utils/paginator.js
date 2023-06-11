export const getTotalPages = (data) => {

    const totalRegisters = data?.count;
    const actualRegisters = data?.results?.length;
    const limit = 10;
    if (!actualRegisters < limit) return Math.ceil(totalRegisters / limit);
};

export const viewRegisters = (data, page) => {
    if (data?.length < 10) {
        const lastRecords = (data?.length) + (10 * (page - 1));
        const initialRecords = (lastRecords - data.length) + 1;

        return { initialRecords, lastRecords };
    }
    const initialRecords = (+page === 1 ? 1 : ((page - 1) * data?.length) + 1);
    const lastRecords = (data?.length) * page;

    return { initialRecords, lastRecords };
};