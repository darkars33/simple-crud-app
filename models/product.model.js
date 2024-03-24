const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
          {
                    name:{
                              type: String,
                              required: [true, "Name is required"]
                    },
                    quantity:{
                              type: Number,
                              required: [true, "quantity is required"]
                    },
                    price:{
                              type: Number,
                              required: [true, "price required"]
                    },
                    img:{
                              type: String,
                              required: false
                    }
          },
          {
                    timestamps:true,
          }    
);

const Product= mongoose.model("Product", ProductSchema);

module.exports = Product;