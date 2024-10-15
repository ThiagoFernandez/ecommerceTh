import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types'; 

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Laptop', category: 'electronica', image: '/path/to/images/laptop.jpg' },
          { id: 2, name: 'Camiseta', category: 'ropa', image: '/path/to/images/camiseta.jpg' },
          { id: 3, name: 'Televisor', category: 'electronica', image: '/path/to/images/televisor.jpg' },
          { id: 4, name: 'Pantalón', category: 'ropa', image: '/path/to/images/pantalon.jpg' },
          { id: 5, name: 'Smartphone', category: 'electronica', image: '/path/to/images/smartphone.jpg' },
          { id: 6, name: 'Chaqueta', category: 'ropa', image: '/path/to/images/chaqueta.jpg' },
        ]);
      }, 2000);
    });

    fetchProducts.then((data) => setProducts(data));
  }, []);

  const filteredProducts = id ? products.filter(product => product.category === id) : products;

  return (
    <div className='item-list-container'>
      <h2>{greeting}</h2>
      <ul className='product-list'>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link className='product-link' to={`/item/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
