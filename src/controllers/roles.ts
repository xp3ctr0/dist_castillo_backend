import {Request, Response} from "express";
import {handleHttp} from "../utils/error.handle";
import {createRolService, deleteRolService, getRolService, updateRolService} from "../services/roles.service";
import {getRolesService} from "../services/roles.service";

const getRol = async (req: Request, res: Response) => {
    try {
        console.log(req);
        const responseRol = await getRolService(req, res);
        res.send(responseRol);
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEM");
    }
}
const getRoles = async (req: Request, res: Response) => {
    try {
        const responseRol = await getRolesService(req, res);
        res.send(responseRol);
    } catch (e) {
        handleHttp(res, "ERROR_GET_ITEMS");
    }
}
const updateRol = async (req: Request, res: Response) => {
    try {
        const responseUpdateRol = await updateRolService(req, res);
        res.send(responseUpdateRol);
    } catch (e) {
        handleHttp(res, "ERROR_UPDATE_ITEMS");
    }
}
const postRol = async (req: Request, res: Response) => {
    try {
        const responsePostRol = await createRolService(req, res);
        res.send(responsePostRol);
    } catch (e) {
        handleHttp(res, "ERROR_POST_ITEM");
    }
}
const deleteRol = async (req: Request, res: Response) => {
    try {
        const responseUpdateRol = await deleteRolService(req, res);
        res.send(responseUpdateRol);
    } catch (e) {
        handleHttp(res, "ERROR_DELETE_ITEM");
    }
}

export {getRol, getRoles, postRol, updateRol, deleteRol}