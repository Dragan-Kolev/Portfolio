"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const appController = require('../controllers/appController');
router.get('/', appController.getHome);
router.get('/portfolio', appController.getPortfolio);
router.get('/contact', appController.getContact);
module.exports = router;
