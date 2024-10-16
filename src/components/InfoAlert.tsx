import {Alert, AlertIcon} from "@chakra-ui/react"

export const InfoAlert = ({info}:{info:string}) => (
    <Alert status='info' borderRadius='md'>
    <AlertIcon />
        {info}
    </Alert>
)