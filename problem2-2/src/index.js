const express = require('express');
const morgan = require('morgan');
const app = express();
var cors = require("cors");
app.set('port', process.env.PORT || 3002);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use('/apiencrypt', require('./ApiSecurity/encrypt'));
app.use('/apidecrypt', require('./ApiSecurity/decrypt'))

// starting the serveR
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});