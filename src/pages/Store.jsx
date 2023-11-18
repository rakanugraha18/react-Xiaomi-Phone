import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartProvider";

export default function Store() {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart } = useContext(CartContext);

  async function getProducts() {
    const base = "https://6551cffe5c69a77903291de6.mockapi.io/products";

    const response = await fetch(base);
    const data = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex flex-col justify-center bg-orange-100">
      <div className="flex justify-between items-center px-20 py-5">
        <h1 className="text-2xl uppercase font-bold mt-10 text-center mb-10">
          Store
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center bg-white shadow-md rounded-lg px-2 py-2"
          >
            <img
              src={product.image}
              alt={product.image}
              className="rounded-md h-48"
            />
            <div className="mt-4">
              <h1 className="text-lg uppercase font-bold">{product.name}</h1>
              <p className="mt-2 text-orange-600">${product.price}</p>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={() => addToCart(product)}
                className="px-4 py-2 bg-orange-600 text-white text-xs font-bold uppercase rounded hover:bg-orange-700 focus:outline-none focus:bg-orange-700"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
