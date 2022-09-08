import express from 'express';
import { Tea } from '../db/models';

const router = express.Router();

router.get('/allteas', async (req, res) => {
  const teas = await Tea.findAll();
  res.json(teas);
});

export default router;
