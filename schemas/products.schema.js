const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    Id: {
        type: Number,
        required: true,
        unique: true,
    },

    productName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["FOR_SALE", "SOLD_OUT"],
        default: "FOR_SALE",
        required: true,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
    password: {
        type: String,
        required: true,
    },
});


const Product = mongoose.model("Product", productSchema);

module.exports = Product;