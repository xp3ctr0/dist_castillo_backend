import {RowDataPacket} from "mysql2";

export interface  IRoles extends RowDataPacket{
    ROL_ID?: number

    ROL_NAME: string,
    ROL_STATE: number
}