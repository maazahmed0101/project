
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Root from "./roots/Route";
import Navbar from './pages/navbar/Navbar'
function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Root />
      </BrowserRouter>
    </>
  )
}

export default App
