import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './containers/Navbar'
import './normalize.css'
import { SearchPage } from './pages/Search'
import { Home } from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='search' element={<SearchPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App