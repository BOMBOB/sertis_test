


const express = require('express');
const bodyParser = require('body-parser');
const validatorjs = require('validatorjs');
const app = express()
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


app.get('/', (req, res) => {
    console.log(">>Hello world");
    res.send('Hello')
})
// GET all cards of author
app.get('/card', (req, res) => {
    const { body = {} } = req;
    

})

app.listen(3000, () => {
    console.log('>> Port Listening: 3000');
})