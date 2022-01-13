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

const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})