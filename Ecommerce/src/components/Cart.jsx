import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, clearCart, removeFromCart, totalPrice, totalQuantity } = useContext(CartContext);

  // Si el carrito está vacío, mostrar el mensaje
  if (cart.length === 0) {
    return <h2>Tu carrito de compras está vacío</h2>;
  }

  return (
    <div>
      <h2>Tu Carrito</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cart.map((item) => (
          <li key={item.id} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
            <span>
              {item.name} - Cantidad: {item.quantity} - Subtotal: ${item.price * item.quantity}
            </span>
            <button 
              onClick={() => removeFromCart(item.id)} 
              style={{ marginLeft: '20px', color: 'red' }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <div>
        <h3>Total de productos: {totalQuantity()}</h3>
        <h3>Total de la compra: ${totalPrice().toFixed(2)}</h3>
      </div>

      <button 
        onClick={() => window.confirm("¿Estás seguro de que deseas vaciar el carrito?") && clearCart()} 
        style={{ backgroundColor: '#ff4d4d', color: 'white', padding: '10px', border: 'none', marginTop: '20px' }}
      >
        Vaciar Carrito
      </button>
    </div>
  );
};

export default Cart;
