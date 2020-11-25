const express = require('express');
const middleware = require('./middleware')
const generalRouter = require('./routes/index')


const app = express(); // подключаем express
middleware(app) // вызываем все middleware

//Подключение всех роутеров
app.use('/', generalRouter)


module.exports = app;
