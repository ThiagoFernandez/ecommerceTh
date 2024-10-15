import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'; 
import CartProvider from './context/CartContext';
import './index.css';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a T.A.F.P Ecommerce!" />} />
          <Route path="/category/:id" element={<ItemListContainer greeting="Filtrando por categoría..." />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} /> {/* Ruta al componente Cart */}
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </Router>
      <Footer/>
    </CartProvider>
    
  );
}

export default App;
