const express = require('express');
const cateController = require('../controllers/cateController');
 
const route = express.Router();
route.route('/').get(cateController.get);
route.route('/add').get(cateController.getAdd).post(cateController.postAdd);
route.route('/edit/:id').get(cateController.getEdit).post(cateController.postEdit);
route.route('/delete/:id').get(cateController.delete);

module.exports = route;