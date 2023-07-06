import { Request, Response } from "express";
import Ong from "../model/Ong";

// Criar uma nova ONG
async function createOng(req: Request, res: Response) {
    try {
        const { nome, email, descricao, telefone, local } = req.body;
        const ong = await Ong.create({
            nome,
            email,
            descricao,
            telefone,
            local
        });
        res.status(201).json(ong);
    } catch (error) {
        console.log(error);
    }
}


export default createOng;
