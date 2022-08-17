const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/detail', (req, res) => {
    res.send('Detail page')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})