import { Navbar } from './containers/Navbar'
import './normalize.css'
import { SearchPage } from './pages/Search'

const App = () => {
  return (
    <>
      <Navbar />
      <SearchPage />
    </>
  )
}

export default App