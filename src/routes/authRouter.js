const express = require('express');
const router = express.Router();
const {doLogin} = require('../controllers/authController');

/* GET programming languages. */
// @ts-ignore
// router.get("/",getRoles);
// router.get("/:id",getRol);
// router.put("/:id",updateRol);
router.post("/",doLogin);
// router.delete("/:id",deleteRol);

module.exports = router;