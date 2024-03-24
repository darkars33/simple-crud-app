const mongoose = require("mongoose");

const  PersonInfoSchema = new mongoose.Schema(
          {
                    name:{
                              type: String,
                              required: [true, "Name is required"]
                    },
                    age:{
                              type: Number,
                              required: [true, "age is required"]
                    },
                    email:{
                              type: String,
                              required: [true, "email required"]
                    },
                    job:{
                              type: String,
                              required: false
                    }
          },
          {
                    timestamps:true,
          }
)

const PersonInfo = mongoose.model("PersonInfo", PersonInfoSchema);

module.exports= PersonInfo;