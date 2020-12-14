import Hero from './Components/Hero'
import './App.css'
import SearchBar from './Components/Searchbar'
import Result from './Components/Result'
import { useState } from 'react'
// import Autocomplete from './Components/Autocomplete'

const App = () => {
  const [array, setArray] = useState([])
  return (
    <div className="App">
      <Hero>
    <SearchBar prevArray = {array} setArray = {setArray}  />
      </Hero>
      <Result  result = {array} />
    </div>

  )
}


export default App;
