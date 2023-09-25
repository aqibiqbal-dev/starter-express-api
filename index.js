require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000 || process.env.PORT


app.get('/', (req, res) => {
    res.send({name:'Aqib Iqbal'})
})


app.listen(port ,()=>console.log('listening'))