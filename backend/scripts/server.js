//import express

const express = require('express');
const db = require('../src/config/db')
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Database!');
})
app.listen(3000, ()=>{
    return console.log(`Server started on port 3000`);
});