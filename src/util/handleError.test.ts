import {handleError} from "./handleError.ts"

describe('handleError function', () => {

    // Test for string error
    test('should return an object with type "string" and the error message when the error is a string', () => {
        const result = handleError('Some string error')
        expect(result).toEqual({ type: 'string', message: 'Some string error' })
    })

    // Test for Error object
    test('should return an object with type "Error" and the error message when the error is an Error object', () => {
        const error = new Error('Something went wrong')
        const result = handleError(error)
        expect(result).toEqual({ type: 'Error', message: 'Something went wrong' })
    })

    // Test for unknown error type
    test('should return an object with type "unknown" and a default message when the error type is not a string or Error object', () => {
        const result = handleError(123) // Example: unknown type
        expect(result).toEqual({ type: 'unknown', message: 'An unknown error occurred' })
    })

})