import { Request, Response, Router } from "express";
import ongController from "./controllers/ongControllerts";

const router: Router = Router();



router.get('/', (req: Request, res: Response) => {

    res.json({
        message: "Deu bom",
    })

})

router.post('/ong', ongController);


export { router };

