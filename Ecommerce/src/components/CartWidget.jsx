import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../index.css'; 

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-widget" aria-label={`Carrito con ${itemCount} artículos`}>
      {itemCount > 0 ? (
        <>
          <FaShoppingCart size={24} />
          <span className="cart-count">{itemCount}</span>
        </>
      ) : (
        <span className="empty-cart-message">Carrito vacío</span>
      )}
    </div>
  );
  
};

export default CartWidget;
