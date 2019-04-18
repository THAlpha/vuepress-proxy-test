const express = require('express')
const app = express()

app.get('*', function (req, res) {
  res.send('Hello World')
})

app.listen(7070, () => {
  console.log('Express listening on 7070')
})
