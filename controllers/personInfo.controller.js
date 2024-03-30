const PersonInfo = require("../models/personInfo.model");

const getPersonInfo = async (req, res) =>{
          try {
                    const personinfo= await PersonInfo.find();
                    res.status(200).json(personinfo);
                } catch (error) {
                  res.status(500).json({message: error.message});
                }
}

const getPersonInfoById = async (req, res) =>{
          try {
                    const {id} = req.params;
                    const personinfo= await PersonInfo.findById(id);
                    res.status(200).json(personinfo);
                } catch (error) {
                  res.status(500).json({message: error.message});
                }
}

const createPersonInfo = async (req, res) =>{
          try {
                    const personinfo= await PersonInfo.create(req.body);
                    res.status(200).json(personinfo);
                } catch (error) {
                  res.status(500).json({message: error.message});
                }
}

const updatePersonInfo = async (req, res) =>{
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
}

const deletePersonInfo = async (req, res) =>{
          try {
                    const {id} = req.params;
                    const personinfo= await PersonInfo.findByIdAndDelete(id);
                    if(!personinfo){
                      res.status(404).json({message: "personinfo not found"});
                    }
                    res.status(200).json({message: "personinfo deleted"});
                } catch (error) {
                  res.status(500).json({message: error.message});
                }
}

module.exports = {
          getPersonInfo,
          getPersonInfoById,
          createPersonInfo,
          updatePersonInfo,
          deletePersonInfo
}