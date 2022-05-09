const functions = require("firebase-functions");

const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({origin: true}));

app.use(express.json());

app.get('*',(req,res)=> {
  res.status(404).send('404, not found')
})

exports.app= functions.https.onRequest(app)
