var ig = require('instagram-scraping');

var ins = ig.scrapeUserPage('joel_inner').then((result) => {
  return result;
});

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(ins)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
