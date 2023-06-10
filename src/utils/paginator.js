export const getTotalPages = (data) => {

    const totalRegisters = data?.count;
    const actualRegisters = data?.results?.length;
    const limit = 10;
    if(!actualRegisters < limit) return Math.ceil(totalRegisters / limit);
}