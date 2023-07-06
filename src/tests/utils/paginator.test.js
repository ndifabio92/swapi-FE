import {getTotalPages, viewRegisters} from "../../utils/paginator";

describe('getTotalPages', () => {
    test('debería devolver el número correcto de páginas', () => {
        const data = {
            count: 25,
            results: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        };

        const totalPages = getTotalPages(data);
        expect(totalPages).toBe(3);
    });

    test('debería devolver undefined si no hay datos', () => {
        const data = null;

        const totalPages = getTotalPages(data);
        expect(totalPages).toBeNull();
    });
});

describe('viewRegisters', () => {
    test('debería devolver los registros iniciales y finales correctamente', () => {
        const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
        const page = 2;

        const {initialRecords, lastRecords} = viewRegisters(data, page);
        expect(initialRecords).toBe(11);
        expect(lastRecords).toBe(20);
    });

    test('debería devolver los registros iniciales y finales correctamente si hay menos de 10 registros', () => {
        const data = [{}, {}, {}, {}, {}];
        const page = 1;

        const {initialRecords, lastRecords} = viewRegisters(data, page);
        expect(initialRecords).toBe(1);
        expect(lastRecords).toBe(5);
    });

    test('debería devolver los registros iniciales y finales correctamente si es la primera página', () => {
        const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
        const page = 1;

        const {initialRecords, lastRecords} = viewRegisters(data, page);
        expect(initialRecords).toBe(1);
        expect(lastRecords).toBe(10);
    });

    test('sin data', () => {

        const {initialRecords, lastRecords} = viewRegisters();

        expect(initialRecords).toBe(1);
        expect(lastRecords).toBe(0);
    })
});