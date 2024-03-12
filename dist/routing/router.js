"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const appController = require('../controllers/appController');
router.get('/', appController.getHome);
module.exports = router;
