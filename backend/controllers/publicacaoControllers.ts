import { Request, Response } from "express";
import Publicacao from "../model/Publicacao";

// Criar uma nova Publicação
async function createPublicacao(req: Request, res: Response) {
    try {
        const { titulo, conteudo, ongId} = req.body;
        const publicacao = await Publicacao.create({
            titulo,
            conteudo,
            ongId
        });
        res.status(201).json(publicacao);
    } catch (error) {
        console.log(error);
    }
}


export default createPublicacao;