import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '../components/Layout';
import { Tea } from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
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

router.get('/adminprofile', async (req, res) => {
  const initState = { path: req.originalUrl };
  const layout = React.createElement(Layout, { initState });
  const html = renderToString(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

export default router;
