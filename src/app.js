const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

//connecting to database
mongoose.connect('mongodb://localhost/crud-mongo')
  .then(db => console.log('DB connected'))
  .catch(err => console.log(err));

//importing routes
const indexRoutes = require ('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);

//starting server
app.listen(app.get('port'), () =>{
  console.log(`server on port ${app.get('port')}`);
});
