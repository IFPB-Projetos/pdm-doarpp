import { Request, Response } from "express";
import Usuario from "../model/Usuario";

// Criar uma nova ONG
async function createUsuario(req: Request, res: Response) {
  try {
    const { id, nome, email } = req.body;
    const usuario = await Usuario.create({
      id,
      nome,
      email,
    });
    res.status(201).json(usuario);
  } catch (error) {
    console.log(error);
  }
}

export default createUsuario;
