/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"

function AppOld() {
  const [results, setResults] = useState<any>([])
  const [search, setSearch] = useState("")

  return (
    <>
      <h2>Country search</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearch(event.target.value) // use cached results to increase responsiveness on type suggest a current/total for that search
        }}
        style={{
          padding: "8px", //remove inline
          border: "1px solid black",
        }}
      />
      <div
        onClick={() => { //split out
          fetch(`https://restcountries.com/v3.1/name/${search}`)   //filters?
            .then((res) => res.json())
            .then((data) => setResults(data)) //cache results
        }}
        style={{ //remove inline // styled or tailwind ( they use native here so maybe tailwind )
          display: "inline-block",
          padding: "8px",
          margin: "8px",
          border: "1px solid black",
          cursor: "pointer",
        }}
      >
        Search
      </div>

      <div>
        {results.map((x: any) => { //types //keys // styling
          return (
            <div>
              {x.flag} {x.name.official}
              <br />
              Capital: {x.capital}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default AppOld
