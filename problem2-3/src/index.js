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


app.use('/apiproblem2-3', require('./Apiproblem2-3/problem2-3'));
app.use('/apiimage', require('./Apiproblem2-3/ApiImage'));
// starting the serveR
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});