import { NextFunction, Request, Response } from "express";

const getHome = (req: Request, res: Response, next: NextFunction) => {
  res.render('home', {
    path: '/',
    pageTitle: 'PortfolioTest'
  });
}

module.exports = {
  getHome
}