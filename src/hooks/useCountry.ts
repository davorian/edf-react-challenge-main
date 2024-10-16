import {useContext} from "react"
import {CountryContext} from "../context/CountryContext.tsx"

export const useCountry = () => {
    const context = useContext(CountryContext)
    if (!context) {throw new Error("useCountry must be used within a UserProvider")}
    return context
}