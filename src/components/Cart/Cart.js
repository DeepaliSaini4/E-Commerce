import Modal from "../UI/Modal/Modal";
import "./Cart.css";
function CartItem({ id, name, image, quantity }) {
    return (
        <div className="cart-item">
            <div className="item-img">
                <img src={`/assets/${image}`} alt={name} />
            </div>
            <div className="item-info">
                <div>{name}</div>
                <div className="item-qty">
                    <button className="yellow-button qty-button">-</button>
                    <span>{quantity}</span>
                    <button className="yellow-button qty-button qty-plus-button">+</button>
                </div>
            </div>
        </div>
    );
}



function Cart({ showCart, closeCart, cartitems }) {
    return (
        <Modal show={showCart} onClose={closeCart}>
           <div className="cart-container">
            <div className="cart-heading">Cart</div>
            {cartitems.map((item) => (
            <CartItem key = {item.id}//mapping array to jsx requires a unique key for each item
            id={item.id}
            name={item.name}
            image={item.image}
            quantity={item.quantity}/>
            ))}
        <div className="cart-buttons">
          <button className="black-button close-cart" onClick={closeCart}>
            Close
          </button>
            <button className="yellow-button" onClick={closeCart}>
              Checkout
            </button>
        </div>
      </div>
        </Modal>
    );
}

export default Cart;
