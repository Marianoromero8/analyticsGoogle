import './App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom';
import Page2 from './components/Page2';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/page2' element={<Page2 />} />
    </Routes>
  )
}

export default App
