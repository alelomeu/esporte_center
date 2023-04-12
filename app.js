const express = require('express');

const app = express();

//Import routes

const indexRouter = require('./routes/indexRouter');
const loginRouter = require('./routes/loginRouter');
const loginRouter = require('./routes/loginRouter');

// Config forms

app.use(express.urlencoded({extended : true}));
app.use(express.json());

//View engine config

app.set('view engine', 'ejs');
app.set('views','./views') 
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log("Tenha fé que vai funcionar")
})