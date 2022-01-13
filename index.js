require('dotenv').config()

const express = require('express')
const app = express()

const fakeUsers = [
    {
        id: 1,
        name: 'Charles',
        hobby: 'LEGO'
    },
    {
        id: 2,
        name: 'Victoria',
        hobby: 'Explosives'
    }
]

app.get('/api/users', (req, res) => {
    res.status(200).json(fakeUsers)
})

const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})