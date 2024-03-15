"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');
const transport = nodemailer.createTransport({
    host: "test.smtp.mailtrap.io",
    port: 699,
    auth: {
        user: "",
        pass: ""
    }
});
const getHome = (req, res, next) => {
    res.render('home', {
        path: '/',
        pageTitle: 'PortfolioTest'
    });
};
const getPortfolio = (req, res, next) => {
    res.render('portfolio', {
        path: '/portfolio',
        pageTitle: 'Portfolio'
    });
};
const getContact = (req, res, next) => {
    res.render('contact', {
        path: '/contact',
        pageTitle: 'Contact Me',
        hasError: false,
        errorMessage: null,
        validationErrors: []
    });
};
const postContact = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(422)
            .render('contact', {
            path: '/contact',
            pageTitle: 'Contact Me',
            name: name,
            email: email,
            message: message,
            hasError: true,
            validationErrors: errors.array()
        });
    }
    alert("Thank you for sending a message, you will be redirected to the homepage in 5 seconds.");
    setTimeout(() => {
        res.redirect('/');
    }, 5000);
};
module.exports = {
    getHome,
    getPortfolio,
    getContact,
    postContact
};
