import { Router } from "express";

const router: Router = require('express').Router();
const appController = require('../controllers/appController');
const {body} = require('express-validator');

router.get('/', appController.getHome);

router.get('/portfolio', appController.getPortfolio);

router.get('/contact', appController.getContact);

router.post('/contact', [
  body('name').not().isEmpty().matches(/[A-Za-z]+\ [A-Za-z]+/).trim(),
  body('email').not().isEmpty().isEmail().normalizeEmail(),
  body('message').isLength({min: 20, max: 1000}).trim()
], appController.postContact);

module.exports = router;