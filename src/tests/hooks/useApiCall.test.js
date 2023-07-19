import {renderHook} from "@testing-library/react";
import useApiCall from "../../hooks/useApiCall";

// const baseUrl = "https://swapi.dev/api/";
// global.fetch = jest.fn(() =>
//     Promise.resolve({
//         json: () => Promise.resolve({ data: 'mockedData' }),
//     })
// );
//
// describe('useApiCall', () => {
//     beforeEach(() => {
//         fetch.mockClear();
//     });
//
//     it('should fetch data from API', async () => {
//         const resource = 'users';
//         const name = 'John';
//         const page = '2';
//
//         const { result, waitForNextUpdate } = renderHook(() => useApiCall(resource, page, name));
//
//         expect(result.current.loading).toBe(true);
//
//         await waitForNextUpdate();
//
//         expect(result.current.data).toEqual({ data: 'mockedData' });
//         expect(result.current.loading).toBe(false);
//         expect(result.current.error).toBeNull();
//
//         // Ensure the correct URL was used for the fetch call
//         expect(fetch).toHaveBeenCalledWith(`${baseUrl}${resource}/?search=${name}&page=${page}`);
//     });
//
//     it('should handle API call error', async () => {
//         const resource = 'users';
//         const name = 'John';
//         const page = '2';
//
//         // Mock fetch to return an error
//         global.fetch = jest.fn(() => Promise.reject(new Error('API error')));
//
//         const { result, waitForNextUpdate } = renderHook(() => useApiCall(resource, page, name));
//
//         expect(result.current.loading).toBe(true);
//
//         await waitForNextUpdate();
//
//         expect(result.current.data).toEqual([]);
//         expect(result.current.loading).toBe(false);
//         expect(result.current.error).toEqual(new Error('API error'));
//     });
// });

describe("useApicall", () => {
    test("default state", () => {
        const { result} = renderHook( () => useApiCall('films','1',''));
        const { data, isLoading, error } = result.current;
        expect(data.length).toBe(0);
        expect(isLoading).toBeTruthy();
        expect(error).toBeFalsy();
    })
})