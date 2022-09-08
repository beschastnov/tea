import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../db/models';

// const router = express.Router();
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
    f_name: fName, l_name: lName, login, pass: hashedPass,
  });
  req.session.userId = newUser.id;
  req.session.userFirstName = newUser.f_name;
  req.session.userLastName = newUser.l_name;
  req.session.userLogin = newUser.login;
  res.json();
});

router.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body;
    const currUser = await User.findOne({ where: { login } });
    const compare = await bcrypt.compare(password, currUser.pass);
    console.log(compare);
    if (compare) {
      req.session.userId = currUser.id;
      req.session.userFirstName = currUser.f_name;
      req.session.userLastName = currUser.l_name;
      req.session.userLogin = currUser.login;
      req.session.userPass = currUser.pass;
      res.status(200).json(currUser.name);
    } else {
      res.sendStatus(401);
    }
  } catch (e) {
    console.log(e);
  }
});

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.sendStatus(200);
});

export default router;
