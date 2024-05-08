const express = require('express');
const router = express.Router();

const {validators, validationHandler} = require('../validators/contacts-validator');

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', validators, validationHandler, contactsController.createContact);

router.put('/:id',  validators, validationHandler, contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;
