import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import laptopImage from '../assets/1.jpg'; 
import televisorImage from '../assets/3.webp'; 
import camisetaImage from '../assets/2.jpg'; 
import pantalonImage from '../assets/4.jfif'; 
import smartphoneImage from '../assets/5.webp'; 
import chaquetaImage from '../assets/6.jpg'; 

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: 'Laptop',
            description: 'Una laptop potente',
            price: 999.99,
            image: laptopImage,
          },
          { id: 2, name: 'Camiseta', description: 'Camiseta de algodón', price: 29.99, image: camisetaImage },
          { id: 3, name: 'Televisor', description: 'Televisor 4K', price: 499.99, image: televisorImage },
          { id: 4, name: 'Pantalón', description: 'Pantalón de mezclilla', price: 39.99, image: pantalonImage },
          { id: 5, name: 'Smartphone', description: 'Smartphone de última generación', price: 799.99, image: smartphoneImage },
          { id: 6, name: 'Chaqueta', description: 'Chaqueta de invierno', price: 89.99, image: chaquetaImage },
        ]);
      }, 2000);
    });

    fetchProducts.then((data) => {
      const selectedProduct = data.find((product) => product.id === parseInt(id));
      setProduct(selectedProduct);
      setLoading(false);
    });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity: 1 });
      setMessage(`${product.name} ha sido agregado al carrito!`);
    }
  };

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="item-detail-container">
      <div className='item-detail'>
        <img src={product.image} alt={product.name} className="product-image" />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Precio: ${product.price.toFixed(2)}</p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Agregar al Carrito
        </button>
        {message && <p>{message}</p>} {/* Mostrar mensaje de confirmación */}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
