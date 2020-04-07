const express = require('express');
const router = express.Router();

module.exports = () => {
  router.get('/test', (req , res) => {
    res.json({status: 'API function optimal'})
  });

  return router;
};