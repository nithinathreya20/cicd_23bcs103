const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/student-details', (req, res) => {
    res.json({
        name: "R Nithin Athreya",
        roll: "2023BCS0103",
    })
})

app.listen(5000, () => console.log("Server running on port 5000"))
