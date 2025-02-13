import { useState } from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import AddProduct from "./components/AddProduct/AddProduct";
import initialproducts from "./data/products.json"; 

function App() {
  const [showCart, setshowCart] = useState(false);
  const [showaddproduct, setshowaddproduct] = useState(false);

  const [cartitems, setcartitems] = useState([]); //default value of the state is an empty array
  const [products, setproducts] = useState(initialproducts);

  //for adding product to cart
  const openCart = () => setshowCart(true);
  const closeCart = () => setshowCart(false);

  //for adding product of own to website
  const openaddproduct = () => setshowaddproduct(true);
  const closeaddproduct = () => setshowaddproduct(false);

  const handleaddtocart = (productId, productName, productImage) => {
    const productincartindex = cartitems.findIndex(
      (item) => item.id === productId
    );
    if (productincartindex == -1) {
      const cartitem = {
        id: productId,
        name: productName,
        image: productImage,
        quantity: 1,
      };
      setcartitems((state) => [...state, cartitem]);
    } else {
      const updatedcartitems = [...cartitems];
      updatedcartitems[productincartindex].quantity += 1;
      setcartitems(updatedcartitems);
    }
  };
  const handleincreasequantity = (productId) => {
    const productincartindex = cartitems.findIndex(
      (item) => item.id === productId
    );
    const updatedcartitems = [...cartitems];
    updatedcartitems[productincartindex].quantity += 1;
    setcartitems(updatedcartitems);
  };
  const handledecreasequantity = (productId) => {
    const productincartindex = cartitems.findIndex(
      (item) => item.id === productId
    );
    const qty = cartitems[productincartindex].quantity;
    let updatedcartitems = [...cartitems];
    
    if (qty == 1) {
       updatedcartitems = updatedcartitems.filter(
        (item) => item.id !== productId
      );
    } else {
      updatedcartitems[productincartindex].quantity -= 1;
    }
    setcartitems(updatedcartitems);
  };

  const handleaddproduct = (productName) => {
    const product = {
      id: products.length+1,
      name: productName,
      image: "default.jpg",
    };
    setproducts((state) => [...state,product]);
    closeaddproduct();
  }

  //React Fragments
  return (
    <>
      <Header openCart={openCart} openaddproduct={openaddproduct} />
      <Products products = {products} onaddtocart={handleaddtocart} />
      <Cart
        showCart={showCart}
        closeCart={closeCart}
        cartitems={cartitems}
        onincreasequantity={handleincreasequantity}
        ondecreasequantity={handledecreasequantity}
      />
      <AddProduct 
        showaddproduct={showaddproduct}
        oncloseaddproduct={closeaddproduct}
        onaddproduct={handleaddproduct }
      />
    </>
  );
}
export default App;
