import { useCart } from '../context/CartContext';
import Cart from './Cart';

const Header = ({ setCategory }) => {
  const { cart, toggleCart } = useCart();

  return (
    <div className="header">
      <a href="#" className="logo">⚽ LaCasacaFC</a>

      <nav className="nav">
        <button className="nav-link" onClick={() => setCategory('laliga')}>LaLiga</button>
        <button className="nav-link" onClick={() => setCategory('especial')}>Especiales</button>
        <button className="nav-link" onClick={() => setCategory('retro')}>Retro</button>
        <button className="nav-link" onClick={() => setCategory('all')}>Todas</button>
      </nav>

      <div className="cart-container">
        <div className="cart-icon" onClick={toggleCart}>
          🛒 <span className="cart-count">{cart.length}</span>
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default Header;
