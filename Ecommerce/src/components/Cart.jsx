import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2>Tu carrito de compras está vacío</h2>;
  }

  return (
    <div>
      <h2>Tu Carrito</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Cantidad: {item.quantity} - Precio: ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  );
};

export default Cart;
