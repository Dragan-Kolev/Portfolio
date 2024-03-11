"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getHome = (req, res, next) => {
    res.render('home', {
        path: '/',
        pageTitle: 'PortfolioTest'
    });
};
module.exports = {
    getHome
};
