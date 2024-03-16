import { NextFunction, Request, Response } from "express";

const nodemailer = require('nodemailer');

const { validationResult } = require('express-validator');

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "25c0c2c95346f6",
    pass: "4938b855f5c9e8"
  }
})

const getHome = (req: Request, res: Response, next: NextFunction) => {
  res.render('home', {
    path: '/',
    pageTitle: 'Welcome'
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
    pageTitle: 'Contact Me',
    hasError: false,
    errorMessage: null,
    validationErrors: []
  });
}

const postContact = (req: Request, res: Response, next: NextFunction) => {
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
    })
  }

  transport.sendMail({
    to: 'drahmull@gmail.com',
    from: name,
    subject: 'Message',
    html: `<h1> Message </h1>
           <p>From: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`
  });

  res.redirect('/');

  
}

module.exports = {
  getHome,
  getPortfolio,
  getContact,
  postContact
}