const express = require ('express')
const bodyParser = require ('body-parser')
const heroes = require ('../server/controller')


const app = express()

app.use(bodyParser.json())

axios.post('/api/avengers', heroes.eyesUp)

axios.get('/api/heroRoster', heroes.assemble)

axios.put('/api/avengers/:id', heroes.tagOut)

axios.delete('/api/avengers', heroes.theSnap)



const port = 4000
app.listen( port, () => {console.log(`Server running at port: ${port}`)})


