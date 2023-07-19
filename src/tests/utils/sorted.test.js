import {sortedList} from "../../shared/sorted";

describe('sortedList', () => {
    test('should return the sorted list in ascending order', () => {
        const data = [
            { name: 'John', age: 30 },
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 35 },
        ];
        const sortField = 'name';
        const ascending = true;

        const expectedList = [
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 35 },
            { name: 'John', age: 30 },
        ];

        const result = sortedList(data, sortField, ascending);

        expect(result).toEqual(expectedList);
    });

    test('should return the sorted list in descending order', () => {
        const data = [
            { name: 'John', age: 30 },
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 35 },
        ];
        const sortField = 'name';
        const ascending = false;

        const expectedList = [
            { name: 'John', age: 30 },
            { name: 'Bob', age: 35 },
            { name: 'Alice', age: 25 },
        ];

        const result = sortedList(data, sortField, ascending);

        expect(result).toEqual(expectedList);
    });

    test('should handle undefined or null data', () => {
        const data = undefined;
        const sortField = 'name';
        const ascending = true;

        const result = sortedList(data, sortField, ascending);

        expect(result).toBeUndefined();
    });

    test('should handle undefined or null sortField', () => {
        const data = [
            { name: 'John', age: 30 },
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 35 },
        ];
        const sortField = undefined;
        const ascending = true;

        const result = sortedList(data, sortField, ascending);

        expect(result).toBe(data);
    });
});