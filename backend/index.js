const express = require('express')
const app = express()

app.get('/student-details', (req, res) => {
    res.json({
        name: "Your Name",
        roll: "Your Roll",
        register: "Your Register Number"
    })
})

app.listen(5000, () => console.log("Server running on port 5000"))
