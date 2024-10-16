import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'

const ErrorAlert = ({ error }:{error : Error | null}) => {
    return (
        <Alert status='error' borderRadius='md'>
            <AlertIcon />
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>{error?.message}</AlertDescription>
        </Alert>
    )
}

export default ErrorAlert