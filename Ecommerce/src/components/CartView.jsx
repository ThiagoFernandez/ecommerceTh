import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartView = () => {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <div>
      <h2>Tu Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalPrice()}</h3>
    </div>
  );
};

export default CartView;
