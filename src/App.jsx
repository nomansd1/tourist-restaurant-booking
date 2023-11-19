import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, ProductDetail, Search } from './pages/index'

import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/search" element={<Search/>} />
        <Route exact path="/productdetail" element={<ProductDetail/>} />
      </Routes>
    </Router>
  )
}

export default App
