import Hero from './Components/Hero'
import './App.css'
import SearchBar from './Components/Searchbar'
import Result from './Components/Result'
// import Autocomplete from './Components/Autocomplete'

const App = () => {
  const arr = [{Title: 'New York', Type: 'Pretty fucked mayn', Temp: '49C'}, {Title: 'New York', Type: 'Pretty fucked mayn', Temp: '49C'}]
  return (
    <div className="App">
      <Hero>
    <SearchBar />
      </Hero>
      <Result result = {arr} />
    </div>

  )
}


export default App;
