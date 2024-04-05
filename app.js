const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World, My name is Kawin Kengkate.\nTest github Action.'))

app.listen(3000, () => console.log('server start'))
