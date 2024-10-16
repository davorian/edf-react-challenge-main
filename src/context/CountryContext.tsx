import {createContext, ReactNode, useState} from "react"
import {RawCountryType} from "../types.ts"
import {handleError} from "../util/handleError.ts"
import {fetcher} from "../util/APIUtils.ts"
import {VITE_COUNTRIES_URL} from "../constants.ts"

type CountryContextType = { error: Error | null, fetchCountries:(search:string) => Promise<void> , isLoading:boolean, results:RawCountryType[] | null }
export const CountryContext = createContext<CountryContextType | null>(null)

export const CountryProvider = ({ children, _loading=false, _error= null, _url=VITE_COUNTRIES_URL}: { children: ReactNode, _loading?:boolean, _error?:Error | null, _url?:string }) => {
  const [results, setResults] = useState<RawCountryType[]|null>(null)
  const [error, setError] = useState<Error | null>(_error)
  const [isLoading, setIsLoading] = useState<boolean>(_loading)

  const fetchCountries = async (search: string='') => {
    setIsLoading(true)
    setError(null)
    try {
      const data = await fetcher<RawCountryType[]|null>(`${_url}${search}`)
      setResults(data)
    } catch (err: unknown) {
      const { message } = handleError(err)
      setError(new Error(message))
    }
    finally {
      setIsLoading(false)
    }
  }
  const contextValue:CountryContextType = { error, fetchCountries, isLoading, results}
    return (
    <CountryContext.Provider value={contextValue}>
      {children}
    </CountryContext.Provider>
  )
}

