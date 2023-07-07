import { Request, Response, Router } from "express";
import ongController from "./controllers/ongControllerts";
import publicacaoController from "./controllers/publicacaoControllers";

const router: Router = Router();



router.get('/', (req: Request, res: Response) => {

    res.json({
        message: "Deu bom",
    })

})

router.post('/ong', ongController);

router.post('/publicacao', publicacaoController)

export { router };

