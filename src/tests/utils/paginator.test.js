import { getTotalPages, viewRegisters } from "../../shared/paginator";

describe('getTotalPages', () => {
    test('should return the correct number of pages', () => {
        const data = {
            count: 25,
            results: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        };

        const totalPages = getTotalPages(data);
        expect(totalPages).toBe(3);
    });

    test('should return undefined if there is no data', () => {
        const data = null;

        const totalPages = getTotalPages(data);
        expect(totalPages).toBeNull();
    });
});

describe('viewRegisters', () => {
    test('should return the correct initial and last records', () => {
        const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
        const page = 2;

        const { initialRecords, lastRecords } = viewRegisters(data, page);
        expect(initialRecords).toBe(11);
        expect(lastRecords).toBe(20);
    });

    test('should return the correct initial and last records if there are less than 10 records', () => {
        const data = [{}, {}, {}, {}, {}];
        const page = 1;

        const { initialRecords, lastRecords } = viewRegisters(data, page);
        expect(initialRecords).toBe(1);
        expect(lastRecords).toBe(5);
    });

    test('should return the correct initial and last records if it is the first page', () => {
        const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
        const page = 1;

        const { initialRecords, lastRecords } = viewRegisters(data, page);
        expect(initialRecords).toBe(1);
        expect(lastRecords).toBe(10);
    });

    test('should return default values if no data is provided', () => {
        const { initialRecords, lastRecords } = viewRegisters();

        expect(initialRecords).toBe(1);
        expect(lastRecords).toBe(0);
    });
});