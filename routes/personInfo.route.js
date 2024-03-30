const express = require('express');
const router = express.Router();
const {getPersonInfo, getPersonInfoById, createPersonInfo, updatePersonInfo, deletePersonInfo} = require('../controllers/personInfo.controller');

router.get('/', getPersonInfo);
router.get('/:id', getPersonInfoById);
router.post('/', createPersonInfo);
router.put('/:id', updatePersonInfo);
router.delete('/:id', deletePersonInfo);

module.exports= router;