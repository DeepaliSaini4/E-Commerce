import "./Header.css";

function Header({ openCart, openaddproduct,onddproduct}) {
  return (
    <div className="Header">
      <h1>
        AURELLE&nbsp;<i>"grace in every step, elegance in every thread."</i>
      </h1>
      <div>
        <button className="yellow-button" style={{marginRight: "20px" }} onClick={openaddproduct}>Add Product</button>
        <button className="yellow-button" onClick={openCart}>Cart</button>
      </div>
    </div>
  );
}

export default Header;
