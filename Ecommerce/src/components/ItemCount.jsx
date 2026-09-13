import { useState } from 'react';
import PropTypes from 'prop-types'; 

const ItemCount = ({ stock, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity <= stock) {
      onAddToCart(quantity); 
    } else {
      alert("No hay suficiente stock");
    }
  };

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,   
  onAddToCart: PropTypes.func.isRequired 
};

export default ItemCount;
