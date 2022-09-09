import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '../components/Layout';
import { Tea, User, Coment } from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const userSession = req.session;
  const allTeas = await Tea.findAll();
  const initState = { path: req.originalUrl, allTeas };
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/registration', async (req, res) => {
  const initState = { path: req.originalUrl };
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/login', async (req, res) => {
  const initState = { path: req.originalUrl };
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/tea/:id', async (req, res) => {
  const { id } = req.params;
  const oneTea = await Tea.findOne({ where: { id } });
  const allComents = await Coment.findAll();
  const initState = { path: req.originalUrl, oneTea, allComents };
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
  // res.json(oneTea);
});

router.get('/teas', async (req, res) => {
  const allTeas = await Tea.findAll();
  const initState = { path: req.originalUrl, allTeas };
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/adminprofile', async (req, res) => {
  const initState = { path: req.originalUrl };
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

export default router;
