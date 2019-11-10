const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

//import files
const customerRoutes = require('./routes/customer.routes');


//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(morgan('dev'));
app.use(require('./database'));
app.use(express.urlencoded({extended: false}));


//routes
app.use('/', customerRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//Run server
app.listen(app.get('port'), ()=>{
    console.log(`Server is running on port ${app.get('port')}`);
});