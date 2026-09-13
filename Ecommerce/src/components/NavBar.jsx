import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import '../index.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Mi Tienda</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/electronica">Electrónica</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/ropa">Ropa</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Carrito</Link>
            </li>
          </ul>
        </div>
        <Link to="/cart">
            <CartWidget />
          </Link>
      </div>
    </nav>
  );
};

export default NavBar;
