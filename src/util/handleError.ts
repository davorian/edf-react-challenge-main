export const handleError = (err: unknown):  { type: string; message: string } => {
    if (typeof err === 'string') {
        // If the error is a string
        return { type: 'string', message: err }
    } else if (err instanceof Error) {
        // If the error is an Error object
        return { type: 'Error', message: err.message }
    } else {
        // Fallback for other types
        return { type: 'unknown', message: 'An unknown error occurred' }
    }
}