import { useCart } from "../../context/CartContext";
import { useTitle } from "../../hooks/useTitle";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";

export const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Cart (${cartList.length})`)

const cartlistLength = cartList.length
  return (
    <main>       
      { cartlistLength ? <CartList /> : <CartEmpty /> }   
    </main>
  )
}
