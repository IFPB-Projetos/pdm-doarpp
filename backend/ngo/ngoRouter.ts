import { Router } from "express";
import { Ngo } from "./ngo";

const router = Router();

router.get("/", async (req, res) => {
  const ngos = await Ngo.findAll();
  res.json(ngos);
});

router.post("/", async (req, res) => {
  const { nome, email, descricao, telefone, local } = req.body;
  const ngo = await Ngo.create({ nome, email, descricao, telefone, local });
  res.status(201).json(ngo);
});

export const ngoRouter = router;
