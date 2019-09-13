


const express = require('express');
const bodyParser = require('body-parser');
const validatorjs = require('validatorjs');
const { createCard, getCard, } = require('./services');
const app = express()
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


app.get('/', (req, res) => {
    console.log(">>Hello world");
    res.send('Hello')
})
// GET all cards of author
app.get('/card', async  (req, res) => {
    const { body = {} } = req;
    const result = await getCard(body);
    res.json(result);

})
app.post('/card', async (req,res) => {
    const { body = {} } = req;
    const result = await createCard(body);
    res.json(result);
})

app.listen(3000, () => {
    console.log('>> Port Listening: 3000');
})