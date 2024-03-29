import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AllBeersPage from './pages/AllBeersPage'
import RandomBeerPage from './pages/RandomBeerPage'
import AddNewBeerPage from './pages/AddNewBeerPage'
import BeerDetailsPage from './pages/BeerDetailsPage'


function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/beers' element={<AllBeersPage/>}></Route>
        <Route path='/random-beer' element={<RandomBeerPage></RandomBeerPage>}></Route>
        <Route path='/new-beer' element={<AddNewBeerPage></AddNewBeerPage>}></Route>
        <Route path='/beers/:beerId' element={<BeerDetailsPage/>}></Route>
      </Routes>

    </>
  )
}

export default App
