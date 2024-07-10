const express = require('express');
const morgan = require('morgan');
const app = express();
var cors = require("cors");
app.set('port', process.env.PORT || 3003);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use('/apiproduct', require('./ApiProduct/product'));
app.use('/apiimage', require('./ApiProduct/ApiImage'));
// starting the serveR
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});