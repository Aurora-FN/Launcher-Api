const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const app = express()

const PORT = process.env.PORT || 4321

mongoose.connect(`mongodb://uu4u3l4dltg3snxuhl1j:ymNww20Vkp9bSBajQyLq@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bnri8fck5vzfyrf?replicaSet=rs0`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=> {
    console.log("✅ mongoose")
}).catch((err) => {
    console.log(`🚫 mongoose Err: ${err}`)
})

app.listen(PORT, () => {
    console.log(`Server is online with port: ${PORT}`)
})
app.use(require(`./login`))

app.get("*", (req, res) => res.json({
"errorCode": "errors.com.epicgames.page.not_found",
"message": "That Url Isnt On Our Api"
}))