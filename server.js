


const express = require('express');
const bodyParser = require('body-parser');
const { createCard, getCard, getCardByID, deleteCardByID,
    updateCardByID, } = require('./services');
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// app.get('/', (req, res) => {
//     console.log(">>Hello world");
//     res.send('Hello')
// })
// GET all cards of author
app.get('/card', async  (req, res) => {
    const { body = {} } = req;
    const result = await getCard(body);
    const { code } = result || {}; 
    res.status(code).json(result);

})
app.get('/card/:id', async(req, res) => {
    const { body = {}, params = {} } = req;
    const { id } = params;
    const result = await getCardByID({ ...body, id });
    const { code } = result || {}; 
    res.status(code).json(result);
})
app.post('/card', async (req,res) => {
    const { body = {} } = req;
    const result = await createCard(body);
    const { code } = result || {}; 
    res.status(code).json(result);
})
app.delete('/card/:id', async(req, res) => {
    const { body = {}, params = {} } = req;
    const { id } = params;
    const result = await deleteCardByID({...body, id });
    const { code } = result || {}; 
    res.status(code).json(result);
})
app.put('/card/:id', async (req, res) => {
    const { body = {}, params = {} } = req;
    const {id } = params;
    const result = await updateCardByID({...body, id})
    const { code } = result || {}; 
    res.status(code).json(result);
})

app.listen(3000, () => {
    console.log('>> Port Listening: 3000');
})