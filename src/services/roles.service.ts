import {IRoles} from "../interfaces/roles.interface";
import {Request, Response} from "express";
import {pool} from "../config/db";

export const getRolesService = async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query('SELECT * FROM ROLES');
        res.status(201).json(rows);
    } catch (e) {
        return res.status(500).json({message: "Something goes wrong"});
    }
}

export const getRolService = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const [rows] = await pool.query(`SELECT * FROM ROLES WHERE ROL_ID = ${id}`);
        res.status(201).json(rows);
    } catch (e) {
        return res.status(500).json({message: "Something goes wrong"});
    }
}

export const createRolService = async (req: Request, res: Response) => {
    try {
        const {name, state} = req.body;
        const [rows] = await pool.query(
            "INSERT INTO ROLES (ROL_NAME, ROL_ESTATE) VALUES (?, ?)",
            [name, state]
        );
        res.status(201).json({name, state});
    } catch (error: any) {
        return res.status(500).json({message: error.message});
    }
};

export const updateRolService = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {name, state} = req.body;
        const [result] = await pool.query(
            "UPDATE ROLES SET ROL_NAME = ?, ROL_ESTATE = ? WHERE ROL_ID = ?",
            [name, state, id]
        );
        // @ts-ignore
        if (result.affectedRows === 0) {
            return res.status(404).json({message: "ROL not found"});
        }
        const [rows] = await pool.query("SELECT * FROM ROLES WHERE ROL_ID = ?", [
            id,
        ]);
        // @ts-ignore
        res.json(rows[0]);
    } catch (error: any) {
        return res.status(500).json({message: error.message});
    }
};

export const deleteRolService = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const [rows] = await pool.query("DELETE FROM ROLES WHERE ROL_ID = ?", [id]);
        // @ts-ignore
        if (rows.affectedRows <= 0) {
            return res.status(404).json({message: "ROL not found"});
        }
        res.sendStatus(204);
    } catch (error: any) {
        return res.status(500).json({message: error.message});
    }
};