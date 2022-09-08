import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  res.json();
});

router.post('/registration', async (req, res) => {
  const {
    fName, lName, login, pass,
  } = req.body;
  const hashedPass = await bcrypt.hash(pass, 10);
  const newUser = await User.create({
    f_name: fName, l_name: lName, login, pass: hashedPass, is_admin: false,
  });
  req.session.userId = newUser.id;
  req.session.userFirstName = newUser.f_name;
  req.session.userLastName = newUser.l_name;
  req.session.userLogin = newUser.login;
  res.json();
});

router.post('/login', async (req, res) => {
  const { login, password } = req.body;
  const newUser = await User.findOne({ where: { login } });
  const compare = await bcrypt.compare(password, newUser.pass);
  if (compare) {
    req.session.userId = newUser.id;
    req.session.userLogin = newUser.email;
    req.session.userAdmin = newUser.is_admin;
    res.json({ name: newUser.name });
  } else {
    res.sendStatus(401);
  }
});

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.sendStatus(200);
});

export default router;
