
import React, { useState, useEffect } from 'react';
import Product from './components/Product';
import Cart from './components/Cart';
import Header from './components/Header';

const App = () => {
  const [products] = useState([
    { id: 1, nombre: 'Arroz', precio: 10 },
    { id: 2, nombre: 'manteca', precio: 20 },
    { id: 3, nombre: 'mantequilla', precio: 30 },
    { id: 4, nombre: 'Frijoles', precio: 10 },
    { id: 5, nombre: 'pollo', precio: 20 },
    { id: 6, nombre: 'refrescos', precio: 30 },
  ]);

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = product => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: Math.max(newQuantity, 0) } : item
    );
    setCart(updatedCart.filter(item => item.quantity > 0)); // Filtrar los elementos con cantidad mayor que cero
  };

  const removeItem = productId => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="container mx-auto mt-8">
      <Header/>
      <h1 className='text-center my-auto uppercase  text-5xl'>Productos</h1>
      <div className='flex'>
      <div className="md:w-1/2">
        {products.map(product => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} onUpdateQuantity={updateQuantity} onRemoveItem={removeItem} />
      </div>
    </div>
  );
};

export default App;


