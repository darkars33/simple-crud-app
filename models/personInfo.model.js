const mongoose = require("mongoose");

const  PersonInfoSchema = new mongoose.Schema(
          {
                    companyName:{
                              type: String,
                              required: [true, "Name is required"]
                    },
                    position:{
                              type: String,
                              required: [true, "position is required"]
                    },
                    role:{
                              type: String,
                              required: [true, "role required"]
                    },
                    postedAt:{
                              type: String,
                              required: false
                    },
                    contract:{
                              type: String,
                              required: false
                    },
                    location:{
                              type: String,
                              required: false
                    },
                    languages:{
                              type: Array,
                              required: [true, "languages required"]
                    },
                    tools:{
                              type: Array,
                              required: false
                    },
          },
          {
                    timestamps:true,
          }
)

const PersonInfo = mongoose.model("PersonInfo", PersonInfoSchema);

module.exports= PersonInfo;