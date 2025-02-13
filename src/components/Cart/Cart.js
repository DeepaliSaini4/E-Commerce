import Modal from "../UI/Modal/Modal";
import "./Cart.css";

function CartItem({ id, name, image, quantity, onincreasequantity, ondecreasequantity }) {
  return (
    <div className="cart-item">
      <div className="item-img">
        <img src={`/assets/${image}`} alt={name} />
      </div>
      <div className="item-info">
        <div>{name}</div>
        <div className="item-qty">
          <div>Qty: {quantity}</div>
          <div>
            <button className="yellow-button qty-button qty-plus-button" onClick={() => onincreasequantity(id)}>+</button>
          </div>
          <div>
            <button className="yellow-button qty-button" onClick={() => ondecreasequantity(id)}>-</button>
          </div>
        </div>
      </div>
    </div> 
  );  
}

function Cart({ showCart, closeCart, cartitems, onincreasequantity, ondecreasequantity }) {
  return (
    <Modal show={showCart} onClose={closeCart}>
      <div className="cart-container">
        <div className="cart-heading">Cart</div>
        {cartitems.length > 0 ? (
          cartitems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              quantity={item.quantity}
              onincreasequantity={onincreasequantity}
              ondecreasequantity={ondecreasequantity}
            />
          ))
        ) : (
          <div className="empty-cart">Cart is empty</div>
        )}
        <div className="cart-buttons">
          <button className="black-button close-cart" onClick={closeCart}>
            Close
          </button>
          {cartitems.length > 0 && (
            <button className="yellow-button" onClick={closeCart}>
              Checkout
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
