const express = require('express')
const backend = express()
const frontend = express()

// Backend
backend.get('/', (req, res) => {
  res.send('Backend app on port 3000')
})

backend.listen(3000, () => {
  console.log('Backend app listening on port 3000')
})

// Frontend
frontend.get('/', (req, res) => {
  res.send('Frontend app on port 3001')
})

frontend.listen(3001, () => {
  console.log('Frontend app listening on port 3001')
})
