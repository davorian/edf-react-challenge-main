import {FETCHER_FAILED_TO_FETCH_DATA_AT_, NO_RESULTS_FOUND} from "../constants.ts"

export async function fetcher<T>(url: string): Promise<T> {
    const res = await fetch(`${url}`)
    if ( Array.isArray(res) ) throw new Error(NO_RESULTS_FOUND)
    if (!res.ok) throw new Error(`${FETCHER_FAILED_TO_FETCH_DATA_AT_}${url}`)
    return res.json()
}