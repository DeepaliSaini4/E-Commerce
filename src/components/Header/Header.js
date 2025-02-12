import { useState } from "react";
import "./Header.css";

function Header() {
    const [showcart,setshowCart] = useState(false);

function opencart(){
    setshowCart(true);
}
function closecart(){
    setshowCart(false);
}
  return (
    <div className="Header">
      <h1>AURELLE <i>  "grace in every step, elegance in every thread."</i></h1>
      <div><button className="yellow-button" onClick={opencart}>Cart</button></div>
      {showcart && (<div className="backdrop" onClick={closecart}>
        <div className="modal">
            This is your cart!
        </div>
        </div>
        )} 
    </div>
  );
}

export default Header;
