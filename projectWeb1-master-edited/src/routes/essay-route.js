'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/essay-controller'); //FIX
const authService = require('../services/auth-service');

router.get('/', controller.get);

router.get('/:id',controller.getById);

router.get('/schools/:schoolId',controller.getBySchoolId);

router.post('/', controller.post);

module.exports = router;