

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div className="bg-teal-500 shadow-md rounded-md mx-3 px-5 py-10 mb-5">
      <h3 className="text-center text-2xl bg-blue-700 uppercase">{item.nombre}</h3>
      <p className=" m-5 ">Cantidad: {item.quantity}</p>
      <button  className="m-5 mx-5 flex-shrink-0 bg-blue-600 hover:bg-blue-800 border-blue-500 hover:border-blue-800 text-sm border-4 text-white py-1 px-2 rounded" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
      <button className="m-5 mx-5 w-15 flex-shrink-0 bg-blue-600 hover:bg-blue-800 border-blue-500 hover:border-blue-800 text-sm border-4 text-white py-1 px-2 rounded" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}> - </button>
      <button className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded" onClick={() => onRemoveItem(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;

