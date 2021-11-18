const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const mysql = require('mysql')


// connection BD 
const BD = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: '',
    database : 'canary'

})

BD.connect(function(error) {
    if(error) throw console.log('[-] failed to connect' + error) ;
    console.log('[+] connected')
});


//ay 7aja tet7at f dossier public 
app.use(express.static('public'))


//import html file
// route index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})
// route Sign In
app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/signin.html'))
})
// route Sign Up
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/signup.html'))
})

//route profile page
app.get('/profil/:username', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/profile.html'))
    res.send(console.log(req.params))
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})