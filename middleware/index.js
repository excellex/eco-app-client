module.exports = function(app) {
  const cookieParser = require('cookie-parser')
  const express = require('express')
  const session = require('express-session')
  const FileStore = require('session-file-store')(session)
  const logger = require('morgan')
  const path = require('path')

  app.use(express.urlencoded({extended: true}))
  app.use(express.json())
  app.use(express.static(path.join(__dirname, '..', 'public')))
  app.use(express.static(path.join(__dirname, '..', 'public', 'build')))
  app.use(logger('dev'))
  app.use(cookieParser())

  app.use(session({
    name: 'user_sid',
    resave: false,
    saveUninitialized: false,
    secret: 'secret',
    store: new FileStore({}),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    }
  }))

}
