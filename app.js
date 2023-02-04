const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

const {userRoute,massageRoute} = require('./routes/routes');

const runConnection = require('./DB/config');
runConnection()
app.use(userRoute)
app.use(massageRoute)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))