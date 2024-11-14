import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { Rating } from "../components";
import { useCart } from "../context/CartContext";
import { getProduct } from "../services";
import { toast } from "react-toastify";

export const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [isinCard, setisinCard] = useState(false);

  const { addToCart, removeFromCart, cartList } = useCart();

  useTitle(product.name);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        toast.error(error.message, { closeButton: true });
      }
    }
    fetchProducts();
  }, [id]);

  useEffect(() => {
    if (product) {
      // Check if data exists
      const itemIsinCart = cartList.find((item) => item.id === product.id);
      if (itemIsinCart) {
        setisinCard(true);
      } else {
        setisinCard(false);
      }
    }
  }, [cartList, product]);

  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
          {product.name}
        </h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
          {product.overview}
        </p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3 ">
            <img className="rounded " src={product.poster} alt={product.name} />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span className="">{product.price}</span>
            </p>
            <p className="my-3">
              <span>
                <Rating rating={product.rating} />
              </span>
            </p>
            <p className="my-4 select-none">
              {product.best_seller && (
                <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                  BEST SELLER
                </span>
              )}
              {product.in_stock && (
                <span className="font-semibold text-blue-500 	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  INSTOCK
                </span>
              )}
              {!product.in_stock && (
                <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  OUT OF STOCK
                </span>
              )}
              {product.bio && (
                <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  BIO
                </span>
              )}
              {!product.bio && (
                <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  Non BIO
                </span>
              )}
              
            </p>
            <p className="my-3">
              {isinCard ? (
                <button
                  onClick={() => removeFromCart(product)}
                  className=" text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  disabled={product.in_stock ? "" : "disabled"}
                >
                  Remove
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className={` text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
                    product.in_stock ? "" : "cursor-not-allowed"
                  }`}
                  disabled={product.in_stock ? "" : "disabled"}
                >
                  Add To Cart
                </button>
              )}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {product.long_description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
