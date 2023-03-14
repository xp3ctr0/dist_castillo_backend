// import {Request, Response} from "express";
const handleHttp = require("../utils/error.handle");
// const {createRolService, deleteRolService, getRolService, updateRolService} = require("../services/roles.service");
const {getRolesService} = require("../services/roles.service");

// const getRol = async (req, res) => {
//     try {
//         console.log(req);
//         const responseRol = await getRolService(req, res);
//         res.send(responseRol);
//     } catch (e) {
//         handleHttp(res, "ERROR_GET_ITEM");
//     }
// }
const getRoles = async (req, res) => {
    try {
        const responseRol = await getRolesService(req, res);
        res.send(responseRol);
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEMS");
    }
}
// const updateRol = async (req, res) => {
//     try {
//         const responseUpdateRol = await updateRolService(req, res);
//         res.send(responseUpdateRol);
//     } catch (e) {
//         handleHttp(res, "ERROR_UPDATE_ITEMS");
//     }
// }
// const postRol = async (req, res) => {
//     try {
//         const responsePostRol = await createRolService(req, res);
//         res.send(responsePostRol);
//     } catch (e) {
//         handleHttp(res, "ERROR_POST_ITEM");
//     }
// }
// const deleteRol = async (req, res) => {
//     try {
//         const responseUpdateRol = await deleteRolService(req, res);
//         res.send(responseUpdateRol);
//     } catch (e) {
//         handleHttp(res, "ERROR_DELETE_ITEM");
//     }
// }

// export {getRol, getRoles, postRol, updateRol, deleteRol}

module.exports = {getRoles}