import Modal from "../UI/Modal/Modal";
import "./AddProduct.css";

function AddProduct({showaddproduct, oncloseaddproduct}){
    return <Modal show = {showaddproduct} onClose = {oncloseaddproduct} >
        <div className="add-product-container">
            <div className="add-product-heading">Add Product</div>
            <form onSubmit={() => {}} className="add-product-form">
                <div className="form-label">Enter Product Name</div>
                <input  className="form-input"/>
                <button type = "submit" className="yellow-button submit-button">Add Product</button>
            </form>
        </div>
    </Modal>
}
export default AddProduct; 