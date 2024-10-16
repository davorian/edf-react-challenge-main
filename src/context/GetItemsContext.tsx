import {createContext, ReactNode, useState} from "react"
import {handleError} from "../util/handleError.ts"
import {fetcher} from "../util/APIUtils.ts"

type RawItemsType = object // this should be updated to the type of items you're fetching.

type ItemsContextType<RawItemsType> = { error: Error | null, fetchItems:(search:string) => Promise<void> , isLoading:boolean, results:RawItemsType[] | null }

export const GetItemsContext = createContext<ItemsContextType<RawItemsType> | null>(null)

export const GetItemsProvider = ({ children, _loading=false, _error= null, _url='https://restcountries.com/v3.1/name/' }: { children: ReactNode, _loading?:boolean, _error?:Error | null, _url:string }) => {
    const [results, setResults] = useState<RawItemsType[]|null>(null)
    const [error, setError] = useState<Error | null >(_error)
    const [isLoading, setIsLoading] = useState<boolean>(_loading)

    const fetchItems = async (search: string) => {
        setIsLoading(true)
        setError(null)
        try {
            const data = await fetcher<RawItemsType[]|null>(`${_url}${search}`)
            setResults(data)
        } catch (err: unknown) {
            const { message } = handleError(err)
            setError(new Error(message))
        }
        finally {
            setIsLoading(false)
        }
    }
    const contextValue:ItemsContextType<RawItemsType> = { error, fetchItems, isLoading, results}
    return (
        <GetItemsContext.Provider value={contextValue}>
            {children}
        </GetItemsContext.Provider>
    )
}

