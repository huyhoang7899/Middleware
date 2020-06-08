var express = require('express');
var controller = require('../controllers/transaction.controller');
var validation = require('../validation/transaction.validation');

var router = express.Router();

router.get('/', controller.index);

router.get('/create', controller.create)

router.get('/:id/update', controller.update);

router.get('/:id/delete', controller.delete);

router.get('/:id/complete', validation.complete, controller.complete);

router.get('/search', controller.search);

router.post('/create', controller.postCreate);

router.post('/update', controller.postUpdate);

module.exports = router;
