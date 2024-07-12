const express = require("express")

const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors')

require('dotenv').config()

app.use(express.json())
app.use(cors())

app.get('/', async(req, res)=>{
    console.log("Medflow is running")
})
app.listen(port, ()=>{
    console.log(`The server is running from ${port}`)
})