import {Router} from "express";
import {readdirSync} from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
    return fileName.split(".").shift();
}
readdirSync(PATH_ROUTER).filter((filename) => {
    const cleanName = cleanFileName(filename);
    if (cleanName !== "index") {
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Se esta cargando la ruta...... /${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter.router);
        });
    }
})


export {router};
