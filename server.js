const express = require('express')

const app = express()


//app.use('/', homeRoute)


app.get('/api', (req, res) => {
    res.send('Hello World from API!')
    }

)


    app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
    }
)