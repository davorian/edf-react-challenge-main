import CountrySearch from "./components/CountrySearch"
import CountryList from "./components/CountryList"
import "./styles/App.css"
import {JSX} from "react"

function App(): JSX.Element {
  return (
        <div className="app-container">
          <h1>Country Search App</h1>
          <CountrySearch />
          <CountryList />
        </div>

  )
}

export default App
