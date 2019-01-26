module.exports = require('express').Router()
	.post('/', (req, res, next) => {
		let toSend = req.body.password === 'alohomora' ? true : false
		res.send(toSend)
	});