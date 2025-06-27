import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '100%',
          height: '200px',      // ICONO tamaño pequeño
          objectFit: 'contain',
          backgroundColor: '#fff',
          display: 'block',
          margin: '0 auto',
          padding: '10px'
        }}
      />
      <div className="card-content">
        <h3>{product.name}</h3>
        <p>{product.price.toFixed(2)} €</p>
        <button onClick={() => addToCart(product)}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
