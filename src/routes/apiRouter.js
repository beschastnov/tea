import express from 'express';
import { Tea, Coment } from '../db/models';

const router = express.Router();

router.get('/allteas', async (req, res) => {
  const teas = await Tea.findAll();
  res.json(teas);
});

router.get('/tea/:id', async (req, res) => {
  const { id } = req.params;
  const oneTea = await Tea.findOne({ where: { id } });
  res.json(oneTea);
});

router.post('/add/comment', async (req, res) => {
  try {
    const { coment, teaId } = req.body;
    const currComment = await Coment.create({
      user_id: req.session.userId,
      tea_id: teaId,
      text: coment,
    });
    res.json(currComment);
  } catch (e) {
    console.log(e);
  }


router.get('/tea/:id/allComents', async (req, res) => {
  try {
    const { id } = req.params;
    const allComents = await Coment.findAll({ where: { tea_id: id } });
    res.json(allComents);
  } catch (e) {
    console.log(e);
  }
 });

router.post('/addtea', async (req, res) => {
  const newtea = req.body;
  const newTea = await Tea.create(newtea);
  res.json(newTea);
});

export default router;
