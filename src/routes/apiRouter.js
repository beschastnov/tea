import express from 'express';
import { Tea } from '../db/models';

const router = express.Router();

router.get('/allteas', async (req, res) => {
  const teas = await Tea.findAll();
  res.json(teas);
});

router.post('/addtea', async (req, res) => {
  const newtea = req.body;
  const newTea = await Tea.create(newtea);
  res.json(newTea);
});

export default router;
