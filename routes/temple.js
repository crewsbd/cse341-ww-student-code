const routes = require('express').Router();
const temples = require('../controllers/temple.js');

routes.get('/', temples.findAll);
routes.get('/publishedTemples', temples.findAllPublished);
routes.get('/:temple_id', temples.findOne);
routes.delete('/:temple_id', temples.delete);
routes.delete('/deleteTemples', temples.deleteAll);
routes.put('/:temple_id', temples.update)
routes.post('/', temples.create);

module.exports = routes;
