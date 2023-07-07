import { Router } from "express";
import { Ngo } from "./ngo";

const router = Router();

router.get("/", async (req, res) => {
  const ngos = await Ngo.findAll();
  res.json(ngos);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const ngo = await Ngo.findByPk(id, { include: "posts" });
  return res.json(ngo?.toJSON());
});

router.post("/", async (req, res) => {
  const { name, email, description, phone, latitude, longitude } = req.body;
  const location = { type: "point", coordinates: [latitude, longitude] };
  const ngo = await Ngo.create({ name, email, description, phone, location });
  res.status(201).json(ngo);
});

export const ngoRouter = router;
