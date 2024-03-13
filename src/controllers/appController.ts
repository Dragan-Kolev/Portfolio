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

module.exports = {
  getHome,
  getPortfolio
}