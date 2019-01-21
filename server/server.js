const express = require('express')
const bodyParser = require('body-parser')
const heroes = require('../server/controller')
const axios = require('axios')

const app = express()

app.use(bodyParser.json())

app.get('/api/heroRoster', heroes.assemble)

app.delete('/api/avengers/', heroes.theSnap)

app.post('/api/avengers/:text', heroes.eyesUp)

app.put('/api/avengers/:id', heroes.tagOut)

const port = 4000
app.listen( port, () => {console.log(`Server running at port: ${port}`)})


