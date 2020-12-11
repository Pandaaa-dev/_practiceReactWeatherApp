import Hero from './Components/Hero'
import Searchbar from './Components/Searchbar'
import './App.css'
import SearchBar from './Components/Searchbar'
import Result from './Components/Result'
import { Paper } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Hero>
    <SearchBar />
      </Hero>
      <Result result = {{Title: 'New York'}} />
    </div>
  );
}

export default App;
