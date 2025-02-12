import { useState } from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setshowCart] = useState(false);
  const [cartitems, setcartitems] = useState([]); //default value of the state is an empty array

  const openCart = () => setshowCart(true);
  const closeCart = () => setshowCart(false);

  const handleaddtocart = (productId, productName, productImage) => {
    const productincartindex = cartitems.findIndex(
      (item) => item.id == productId
    );
    if (productincartindex == -1) {
      const cartitem = {
        id: productId,
        name: productName,
        image: productImage,
        quantity: 1,
      };
      setcartitems((state) => [...state, cartitem]);
    }else{
      const updatedcartitmes = [...cartitems];
      updatedcartitmes[productincartindex].quantity += 1; 
      setcartitems(updatedcartitmes);
    }
  };



  return (
    <div>
      <Header openCart={openCart} />
      <Products onaddtocart={handleaddtocart} />
      <Cart showCart={showCart} closeCart={closeCart} cartitems={cartitems} />
    </div>
  );
}
export default App;
