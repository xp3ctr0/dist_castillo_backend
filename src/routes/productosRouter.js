const express = require('express');
const router = express.Router();
const {getProductos,postProduct,updateProduct} = require('../controllers/productosController');

/* GET programming languages. */
// @ts-ignore
router.get("/",getProductos);
// router.get("/:id",getRol);
router.put("/",updateProduct);
router.post("/",postProduct);
// router.delete("/:id",deleteRol);

module.exports = router;