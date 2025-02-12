import ProductsData from "../../data/products.json";
import "./Products.css";

function Product({ id, name, image, onaddtocart}) {
  return (
    <div key={id} className="Product">
      <img src={`/assets/${image}`} alt={name} />
      <div className="Product-name">{name}</div>
      <button className="yellow-button"
       onClick={() => onaddtocart(id, name, image)}
       >
        Add to Cart
        </button>
    </div>
  );
}

function Products({ onaddtocart }) {
  return (
    <div className="Products-container">
      {ProductsData.map((product) => (
        <Product key={product.id} id={product.id} name={product.name} image={product.image}
        onaddtocart = {(id, name, image) => onaddtocart(id, name, image)} />
      ))}
    </div>
  );
}

export default Products;
