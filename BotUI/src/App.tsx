import './App.css'
import Home from './Home'
import Bot from './Bot';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bot" element={<Bot/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
