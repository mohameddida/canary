const express = require('express')
const path = require('path')
const app = express()
const port = 3000


//ay 7aja tet7at f dossier public 
app.use(express.static('public'))
//import html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})
app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/signin.html'))
})
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/signup.html'))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})