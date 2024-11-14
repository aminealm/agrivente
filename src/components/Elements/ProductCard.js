import { Link } from "react-router-dom";
import { Rating } from "./Rating";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { useEffect } from "react";

export const ProductCard = ({product}) => {
    const {id, name, overview, poster, image_local, price, rating, best_seller,bio} = product;
    const [isinCard , setisinCard] = useState(false)
    const { addToCart, removeFromCart ,cartList } = useCart();
    useEffect (() => {
        const itemIsinCart = cartList.find(item => item.id === product.id )
        if (itemIsinCart) {
          setisinCard(true)
        } else {
          setisinCard(false)
    
        }
      },[cartList])

  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/products/${id}`} className="relative" >
            <img className="rounded-t-lg w-full h-64" src={poster} alt={name} />
        </Link>
        <div className="p-5">
            <Link to={`/products/${id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
            
            <div className="flex items-center my-2">
                <Rating rating={rating} />
            </div>

            <p className="flex justify-between items-center">
                <span className="text-2xl dark:text-gray-200">
                    <span>$</span><span>{price}</span>
                </span>
                {isinCard ? (<button
           onClick={()=> removeFromCart(product)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800"
          >
           Remove 
          </button>) : (<button
            onClick={()=> addToCart(product)}   className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                 >
             Add To Cart
          </button>)}
                
                {/* <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800">Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
            </p>
        </div>
    </div>
  )
}
