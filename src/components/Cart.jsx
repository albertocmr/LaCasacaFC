import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, isCartVisible, removeFromCart } = useCart();

  if (!isCartVisible) return null;

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="cart-dropdown">
      <h3>Carrito ({cart.length})</h3>
      {cart.length === 0 ? (
        <p className="empty">Tu carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                {item.name} - {item.price.toFixed(2)} €
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(index)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
          <hr />
          <strong>Total: {total} €</strong>
        </>
      )}
    </div>
  );
};

export default Cart;
