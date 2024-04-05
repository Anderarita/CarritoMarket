

const Product = ({ product, onAddToCart }) => {
  return (
    < div className="md:w-4/5 bg-teal-500 mt-5 p-3 rounded-lg md:overflow-y-scroll mx-3 ">
      <h3 className="text-2xl text-indigo-600 text-center font-bold uppercase">{product.nombre}</h3>
      <p className="text-white">Precio: {product.precio}Lps</p>
      <button className="origin-bottom-right text-white flex-shrink-0 bg-blue-600 hover:bg-blue-800 border-blue-500 hover:border-blue-800 text-sm border-4 text-white py-1 px-2 rounded" onClick={() => onAddToCart(product)}>Agregar al carrito</button>
    
    </div>
  );
};

export default Product;


