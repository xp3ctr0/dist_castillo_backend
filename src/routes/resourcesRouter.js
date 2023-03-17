const express = require('express');
const router = express.Router();
const {getCities,postCities} = require('../controllers/resourcesController');

/* GET programming languages. */
// @ts-ignore
router.get("/cities",getCities);
router.post("/cities",postCities);
// router.get("/:id",getRol);
// router.put("/:id",updateRol);
// router.post("/",postProduct);
// router.delete("/:id",deleteRol);

module.exports = router;