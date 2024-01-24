import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
    title: { type: String, required: true, },
    content: {type: String, required: true, },
    author: {type: String, required: true, },
    password: {type: String, required: true, },
    status: {type: String, required: true, enum: ["For_Sale", "Sold_Out"], default: "For_Sale"},
}, {timestamps: true}
);

const Product = mongoose.model("Product", ItemSchema);
export default Product;
