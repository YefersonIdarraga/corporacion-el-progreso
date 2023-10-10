import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './layouts/Inicio'
import Error404 from './helpers/Error404'
import Institucional from './layouts/Institucional'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/institucional' element={<Institucional />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  )
}

export default App
