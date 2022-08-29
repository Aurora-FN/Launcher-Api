const express = require("express")
const app = express.Router();

const Users = require("./modules/user.js")

app.all('/api/login/email', async (req, res) => { 
	res.send("Error.AccountEmail.NotFound") 
})
app.all('/api/login/password', async (req, res) => { 
	res.send("Error.AccountPassword.NotFound") 
})
app.all('/api/login/check', async (req, res) => { 
	res.send("Error.AccountPassword.NotFound") 
})
app.all('/api/login/email/:id', async (req, res) => { 
	const id = req.param.id
	var user = await Users.findOne({ email: req.params.id, caseSensitive: false }).lean();
	if (user) {
		res.send("1")
	}
	else {
		res.send("2")
	}
})
app.all('/api/login/password/:id', async (req, res) => { 
	const id = req.param.id
	var user = await Users.findOne({ password: req.params.id, caseSensitive: true }).lean();
	if (user) {
		res.send("1")
	}
	else {
		res.send("2")
	}
})
app.all('/api/login/check/:id', async (req, res) => { 
	const id = req.param.id
	var user = await Users.findOne({ email: req.params.id, caseSensitive: false }).lean();
	if (user) {
		res.send(password)
	}
	else {
		res.send("2")
	}
})
module.exports = app