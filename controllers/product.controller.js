const Products = require('../models/product.model');


const getProduct = async (req, res) => {
          try {
                    const products= await Products.find();
                    res.status(200).json(products);   
             } catch (error) {
                  res.status(500).json({message: error.message})     
             }
}

const getProductById = async (req, res) => {
          try {
                    const {id} = req.params;
                    const product= await Products.findById(id);
                    res.status(200).json(product);
           } catch (error) {
                     res.status(500).json({message: error.message});
           }
}

const createProduct = async (req, res) =>{
          try {
                    const product= await Products.create(req.body);
                    res.status(200).json(product); 
           } catch (error) {
                     res.status(500).json({message: error.message})
           }
}
const updateProduct = async (req, res) =>{
          try {
                    const {id} = req.params;
                    const product= await Products.findByIdAndUpdate(id, req.body, {new: true});
        
                    if(!product){
                      res.status(404).json({message: "Product not found"});
                    }
        
                    const updateProduct= await Products.findById(id);
                    res.status(200).json(product);
        
                  } catch (error) {
                    res.status(500).json({message: error.message});
                  }
}

const deleteProduct = async (req, res) =>{
          try {
                    const {id} =req.params;
                      const product = await Products.findByIdAndDelete(id);
                      if(!product){
                        res.status(404).json({message: "Product not found"});
                      }
                      res.status(200).json({message: "Product deleted"});
                  } catch (error) {
                    res.status(500).json({message: error.message});
                  }
}

module.exports= {
          getProduct,
          getProductById,
          createProduct,
          updateProduct,
          deleteProduct
}