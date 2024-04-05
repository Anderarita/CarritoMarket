

import CartItem from './CartItem';

const Cart = ({ cart, onUpdateQuantity, onRemoveItem }) => {
  
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  return (
    <div className="md:w-1/2  bg-teal-200 mt-5 mx-3 p-3 rounded-lg md:overflow-y-scroll md:h-screen">
      <h2 className="text-2xl text-indigo-600 text-center font-bold">Carrito de Compras</h2>
      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          onRemoveItem={onRemoveItem}
        />
      ))}

      <p className='text-3xl text-right  hover:bg-red-700    text-black py-1 px-2 rounded'>Total a Pagar: {getTotal() }Lps</p>

    </div>
  );
};

export default Cart;


