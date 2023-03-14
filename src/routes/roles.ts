import {Request,Response, Router} from "express";
import {deleteRol, getRol, getRoles, postRol, updateRol} from "../controllers/roles";

const router = Router();

console.log('si se puede');
// @ts-ignore
router.get("/",getRoles);
router.get("/:id",getRol);
router.put("/:id",updateRol);
router.post("/",postRol);
router.delete("/:id",deleteRol);

export {router};