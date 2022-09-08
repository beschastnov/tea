import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import indexRouter from './routes/indexRouter';
import apiRouter from './routes/apiRouter';
import authRouter from './routes/authRouter';

const app = express();
const PORT = 3000;

const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: false,
  saveUninitialized: false,
  store: new FileStore(),
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};
app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.session = req.session?.userId ? {
    userId: req.session.userId,
    userEmail: req.session.userEmail,
    userName: req.session.userName,
  } : null;
  next();
});

app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});
