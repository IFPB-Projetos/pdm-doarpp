import { Router } from "express";
import { Ong } from "./ong";

const router = Router();

router.get("/", async (req, res) => {
  const ongs = await Ong.findAll();
  res.json(ongs);
});

router.post("/", async (req, res) => {
  const { nome, email, descricao, telefone, local } = req.body;
  const ong = await Ong.create({ nome, email, descricao, telefone, local });
  res.status(201).json(ong);
});

export const ongRouter = router;
