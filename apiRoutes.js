const express = require('express');
const router = express.Router();

module.exports = () => {
  router.get('/', (req , res) => {
    res.json({status: 'API function optimal'})
  });

  return router;
};