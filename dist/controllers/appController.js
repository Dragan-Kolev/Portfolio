"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        pageTitle: 'Contact Me'
    });
};
module.exports = {
    getHome,
    getPortfolio,
    getContact
};
