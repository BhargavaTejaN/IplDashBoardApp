import {Routes, Route} from 'react-router-dom'

import Home from './components/Home/index'
import NotFound from './components/NotFound/index'
import TeamMatches from './components/TeamMatches/index'

import './App.css'

const App = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/team-matches/:id" element={<TeamMatches />} />
    <Route component={NotFound} />
  </Routes>
)

export default App
