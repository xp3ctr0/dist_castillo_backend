// import {Request, Response} from "express";
// const {createRolService, deleteRolService, getRolService, updateRolService} = require("../services/roles.service");
const handleHttp = require("../utils/error.handle");
const {
    getProductosService,
    createProductService
} = require("../services/productos.service");

const getProductos = async (req, res) => {
    try {
        const responseProductos = await getProductosService(req, res);
        res.send(responseProductos);
    } catch (e) {
        handleHttp(res, "ERROR_GET_PRODUCTOS");
    }
}

const postProduct = async (req, res) => {
    try {
        const responsePostProduct = await createProductService(req, res);
        res.send(responsePostProduct);
    } catch (e) {
        handleHttp(res, "ERROR_POST_ITEMS");
    }
}

// export {getRol, getRoles, postRol, updateRol, deleteRol}

module.exports = {getProductos, postProduct}