import {RawCountryType} from "../types.ts"
import CountryListItem from "./CountryListItem.tsx"
import {sortOn} from "../util/sortOn.ts"
import {useCountry} from "../hooks/useCountry.ts"
import ErrorAlert from "./ErrorAlert.tsx"
import {InfoAlert} from "./InfoAlert.tsx"
import {LOADING, NO_RESULTS_FOUND} from "../constants.ts"

const CountryList = () => {
  const { results, error, isLoading } = useCountry()
  const sortedResults:RawCountryType[] | null = sortOn( results, 'name.common') //cache ?

  if (error && error.message === NO_RESULTS_FOUND ) return <InfoAlert info='No results found'/>

  if (isLoading) return <InfoAlert info={LOADING}/>

  if (error) return <ErrorAlert error={error}/>


  return (
    <>
      {sortedResults ? sortedResults?.map( (country) => (<CountryListItem key={`${country.latlng[0]},${country.latlng[1]}`} {...country}/>)):null}
    </>
  )
}

export default CountryList
