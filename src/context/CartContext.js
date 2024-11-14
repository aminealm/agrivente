import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducers/CartReducer";
const initialeState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(initialeState);

export const CartProvider = ({ children }) => {
  const [state,dispatch]  =  useReducer(CartReducer,initialeState)

  const addToCart = (item) => {
    const updatedCart = state.cartList.concat(item)
    updateTotal(updatedCart)
    dispatch({
      type :'Add_To_Cart' ,
      payload :  {
        items : updatedCart
      }
    })
  } 
  const removeFromCart = (item) => {
    const updatedCart = state.cartList.filter(current => current.id !== item.id)
    updateTotal(updatedCart)
    dispatch({
      type :'Remove_From_Cart' ,
      payload :  {
        items : updatedCart
      }
    })
  } 

  const updateTotal = (items) => {
    let total = 0
    items.forEach(item => total = total + item.price);
    dispatch ({
      type : 'Update_Total',
      payload : {
        total
      }
    })
  }

  const clearCart = () => {
    dispatch({
        type: "Clear_Cart",
        payload: {
            products: [],
            total: 0
        }
    })}

  const value = {

    total :state.total ,
    cartList:state.cartList,
    addToCart,
    removeFromCart,
    clearCart
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context
};
