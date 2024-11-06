const express = require('express')
const mysql = require("mysql2")
const cors = require("cors")
const app = express()
const port = 3000

app.use(cors())

function getConnection() {
  return mysql.createConnection({
    host: 'database',
    user: 'vartotojas',
    password: 'vartotojas',
    database: 'parduotuve'
  })
}

app.get('/carts', (req, res) => {
  try {
    getConnection().query("SELECT * FROM carts", (err, result, fields) => {
      if (err) {
        res.sendStatus(500)
        throw err;
      }
      res.json(result)
    })
  } catch (err) {
    throw err;
  }
})

app.listen(port, () => {
  console.log(`Carts API is running.`)
})