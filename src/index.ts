#!/usr/bin/env node
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(3005, () => {
  console.log('Listening on port 3005');
});