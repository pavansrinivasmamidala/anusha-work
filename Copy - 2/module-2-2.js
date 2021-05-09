const express = require('express')
const app = express()
const port = 2000
const data = require('./data.json')

app.get('/', (req, res) => {
  res.json(data)
})

app.listen(port, () => {
  console.log(`Connect to the app at http://localhost:${port}`)
})
