const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views')); // Asegúrate de que la ruta es correcta

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'contraseña',
    port: 3306,
    database: 'login_project'
}, 'single'));

app.use(express.urlencoded({ extended: false }));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// index
app.get('/', (req, res) => {
    res.render('index');
});

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
