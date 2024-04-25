const route = require('express').Router();
const data = require('../data/userData');

route.get("/professional", async (request, response) => {
    const user = await data.query({professionalName: 'Joe'});
    response.json(user);
   
  });

module.exports = route;


