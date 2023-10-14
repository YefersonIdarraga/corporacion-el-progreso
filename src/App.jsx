import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './layouts/Inicio'
import Error404 from './helpers/Error404'
import Institucional from './layouts/Institucional'
import Misional from './layouts/Misional'
import Estrategico from './layouts/Estrategico'
import Legal from './layouts/Legal'
import Dian from './layouts/Dian'
import Otros from './layouts/Otros'
import ReseñaHistorica from './components/ReseñaHistorica'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/institucional' element={<Institucional />} />
        <Route path='/institucional/reseña-historica' element={<ReseñaHistorica />} />
        <Route path='/misional' element={<Misional />} />
        <Route path='/estrategico' element={<Estrategico />} />
        <Route path='/legal' element={<Legal />} />
        <Route path='/dian' element={<Dian />} />
        <Route path='/otros' element={<Otros />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  )
}

export default App
