import { Router } from "express";

const router: Router = require('router');
const appController = require('../controllers/appController');

router.get('/', appController.getHome());