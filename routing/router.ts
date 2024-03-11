import { Router } from "express";

const router: Router = require('express').Router();
const appController = require('../controllers/appController');

router.get('/', appController.getHome);

module.exports = router;