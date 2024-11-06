const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get("/products", async (req, res) => {
  try {
    const response = await fetch('http://products:3000/products');
    if (!response.ok) {
      console.err(await response.text())
      res.sendStatus(500);
    } else {
      res.json(await response.json())
    }
  } catch (error) {
    console.error("Failed to get products.")
  }
})

app.get("/users", async (req, res) => {
  try {
    const response = await fetch('http://users:3000/users');
    if (!response.ok) {
      console.err(await response.text())
      res.sendStatus(500);
    } else {
      res.json(await response.json())
    }
  } catch (error) {
    console.error("Failed to get users.")
  }
})

app.get("/orders", async (req, res) => {
  try {
    const response = await fetch('http://orders:3000/orders');
    if (!response.ok) {
      console.err(await response.text())
      res.sendStatus(500);
    } else {
      res.json(await response.json())
    }
  } catch (error) {
    console.error("Failed to get orders.")
  }
})

app.get("/carts", async (req, res) => {
  try {
    const response = await fetch('http://carts:3000/carts');
    if (!response.ok) {
      console.err(await response.text())
      res.sendStatus(500);
    } else {
      res.json(await response.json())
    }
  } catch (error) {
    console.error("Failed to get carts.")
  }
})

app.listen(port, () => {
  console.log(`Server API is running.`)
})