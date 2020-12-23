const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router.route("/").get(userController.get);
router.route("/add").get(userController.getAdd).post(userController.postAdd);
router.route("/edit/:id").get(userController.getEdit).post(userController.postEdit);
router.route("/delete/:id").get(userController.delete)
module.exports = router;