const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const inquirer = require('inquirer');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Your password
    password: 'ZXB7943_!a',
    database: 'fitness_DB',
});

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars({
    layoutsDir: './views/layouts'
}))

connection.connect((err) => {
    if (err) throw err;
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('main', { layout: 'index' })
});

app.listen(port, () => {
    console.log(`App listening at :${port}`)
});