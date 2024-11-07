import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import PropTypes from 'prop-types';

const ItemDetail = ({ product }) => {
  const { id, name, price, stock } = product;
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    addToCart({ id, name, price, quantity });
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Precio: ${price}</p>
      <p>Stock disponible: {stock}</p>
      <ItemCount stock={stock} onAddToCart={handleAddToCart} />
    </div>
  );
};

ItemDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,    
    name: PropTypes.string.isRequired,   
    price: PropTypes.number.isRequired,   
    stock: PropTypes.number.isRequired,   
  }).isRequired,
};

export default ItemDetail;
