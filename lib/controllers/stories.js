const { Router } = require('express');
const Story = require('../models/story');

module.exports = Router()
  .post('/', (req, res, next) => {
    Story
      .insert(req.body)
      .then(story => {
        res.send(story);
      })
      .catch(next);
  });
