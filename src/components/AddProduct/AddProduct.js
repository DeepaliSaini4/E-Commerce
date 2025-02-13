import { useState } from "react";
import Modal from "../UI/Modal/Modal";
import "./AddProduct.css";

function AddProduct({ showaddproduct, oncloseaddproduct, onaddproduct }) {
    const [productName, setproductName] = useState("");

    function handlesubmit(event) { 
        event.preventDefault();
        if (productName.trim() === "") return; 
        onaddproduct(productName);
        setproductName(""); 
    }

    const handleproductnamechange = (event) => { 
        setproductName(event.target.value); 
    };

    return (
        <Modal show={showaddproduct} onClose={oncloseaddproduct}>
            <div className="add-product-container">
                <div className="add-product-heading">Add Product</div>
                <form onSubmit={handlesubmit} className="add-product-form">
                    <div className="form-label">Enter Product Name</div>
                    <input 
                        className="form-input" 
                        value={productName} 
                        onChange={handleproductnamechange} 
                    />
                    <button type="submit" className="yellow-button submit-button">Add Product</button>
                </form>
            </div>
        </Modal>
    );
}

export default AddProduct;
