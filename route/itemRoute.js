const express=require('express');
const { addItem, getItems, getItemById, updateItem, deleteItem } = require('../controller/itemController.js');
// const authController = require('../controller/authController.js')
const router=express.Router();


router.post('/add',addItem)
router.get('/all',getItems)
router.get('/:id',getItemById)
router.patch('/:id',updateItem)
router.delete('/:id',deleteItem)
module.exports=router;
