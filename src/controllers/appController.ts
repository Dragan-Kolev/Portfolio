import { NextFunction, Request, Response } from "express";

const getHome = (req: Request, res: Response, next: NextFunction) => {
  res.render('home', {
    path: '/',
    pageTitle: 'PortfolioTest'
  });
}

const getPortfolio = (req: Request, res: Response, next: NextFunction) => {
  res.render('portfolio', {
    path: '/portfolio',
    pageTitle: 'Portfolio'
  });
}

const getContact = (req: Request, res: Response, next: NextFunction) => {
  res.render('contact', {
    path: '/contact',
    pageTitle: 'Contact Me'
  });
}

module.exports = {
  getHome,
  getPortfolio,
  getContact
}