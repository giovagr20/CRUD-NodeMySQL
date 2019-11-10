const mysql = require('mysql');
const myConnection = require('express-myconnection');

const connection=myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    port: '3306',
    database: 'nodemysql'
}, 'single');

module.exports = connection;
