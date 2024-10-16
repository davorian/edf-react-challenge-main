import { fetcher } from './APIUtils'
import { FETCHER_FAILED_TO_FETCH_DATA_AT_, NO_RESULTS_FOUND } from '../constants'

global.fetch = jest.fn()

describe('fetcher', () => {

    afterEach(() => {
        jest.clearAllMocks()
    })


    test('should return the data when the fetch is successful', async () => {
        const mockData = { id: 1, name: 'Test' };

        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockData),
        })

        const result = await fetcher('/test-url')
        expect(result).toEqual(mockData)  // Ensure the fetcher returns the data
    })


    test('should throw NO_RESULTS_FOUND error when response is an array', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce([])

        await expect(fetcher('/test-url')).rejects.toThrow(NO_RESULTS_FOUND) // Ensure the correct error is thrown
    })


    test('should throw error when fetch response is not ok', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
        })

        await expect(fetcher('/test-url')).rejects.toThrow(
            `${FETCHER_FAILED_TO_FETCH_DATA_AT_}/test-url`
        )
    })
})