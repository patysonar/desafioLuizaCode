const express = require('express')
//const routes = require('routes.js')
const app = express()
const port = 3000

app.use(express.json())
//routes(app)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`)
})