import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductListPage from './components/ProductList'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
