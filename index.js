const express = require("express")
const path = require("path")
const app = express()

const PORT = process.env.PORT || 4321

app.listen(PORT, () => {
    console.log(`Server is online with port: ${PORT}`)
})

app.get("*", (req, res) => res.json({
"errorCode": "errors.com.epicgames.page.not_found",
"message": "That Url Isnt On Our Api"
})