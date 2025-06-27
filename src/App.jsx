import { useState } from 'react';
import products from './data/laliga.json'; // tu JSON actualizado
import ProductCard from './components/ProductCard';
import { CartProvider } from './context/CartContext';
import './App.css';
import Header from './components/Header';

function App() {
  const [category, setCategory] = useState('all');

  const filteredProducts = category === 'all'
    ? products
    : products.filter(p => p.category === category);

  return (
    <CartProvider>
      <div className="container">
        <Header setCategory={setCategory} />
        <h1 className="titulo">Tienda de Camisetas de Fútbol</h1>

        <div className="grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
