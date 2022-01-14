require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const jsonParser = bodyParser.json()

const fakeUsers = [
    {
        name: 'Charles',
        hobby: 'LEGO',
        username: 'charles',
        password: 'legoRocks'
    },
    {
        name: 'Victoria',
        hobby: 'Explosives',
        username: 'victoria',
        password: 'boomGoesTheDynamite'
    }
]

app.get('/api/users', (req, res) => {
    res.status(200).json(fakeUsers)
})

app.post('/api/register', jsonParser, (req, res) => {
    const newUser = {
        name: req.body.name,
        hobby: req.body.hobby,
        username: req.body.username,
        password: req.body.password
    }
    res.status(200).json(newUser)
})

app.post('/api/login', jsonParser, (req, res) => {
    if (!req.body.username || !req.body.password) {
        res.status(403).json({ message: 'Invalid username or password'})
    } else {
        res.status(200).json({ message: 'Welcome User!'})
    }
})

const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})