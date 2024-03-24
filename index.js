const express = require("express");
const mongoose = require("mongoose");
const Products= require("./models/product.model.js")
const PersonInfo= require("./models/personInfo.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});




app.get('/api/personInfo', async(req, res) =>{
          try {
              const personinfo= await PersonInfo.find();
              res.status(200).json(personinfo);
          } catch (error) {
            res.status(500).json({message: error.message});
          }
})





app.post('/api/personInfo', async(req, res) =>{
        try {
            const personinfo= await PersonInfo.create(req.body);
            res.status(200).json(personinfo);
        } catch (error) {
          res.status(500).json({message: error.message});
        }
})

//update



app.put('/api/personInfo/:id', async(req, res) =>{
          try {
              const {id} = req.params;
              const personinfo= await PersonInfo.findByIdAndUpdate(id, req.body);

              if(!personinfo){
                res.status(404).json({message: "personinfo not found"});
              }

              const updatedPersonInfo = await PersonInfo.findById(id);
              res.status(200).json(updatedPersonInfo);
          } catch (error) {
            res.status(500).json({message: error.message});
          }
})





app.delete('api/personInfo/:id', async(req, res) =>{
        try {
            const {id} = req.params;
            const personinfo= await PersonInfo.findByIdAndDelete(id);

            if(!peroninfo){
              res.status(200).json({message: "PersonInfo not found"});
            }
            res.status(200).json({message: "PersonInfo deleted"});
        } catch (error) {
          res.status(500).json({message: error.message});
        }
})

mongoose
  .connect(
    "mongodb+srv://darshan:1twoka45@cluster0.rioq1y3.mongodb.net/Node-api?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log("Server is running on port 3000"));
  })
  .catch((err) => console.error(err)); 
