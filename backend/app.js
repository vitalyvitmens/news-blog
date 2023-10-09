const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const port = 3001
const app = express()

app.use(cookieParser())
app.use(express.json())

mongoose
	.connect(
		'mongodb+srv://test:test123@cluster0.zgcseqm.mongodb.net/news-blog?retryWrites=true&w=majority'
	)
	.then(() => {
		app.listen(port, () => {
			console.log(`http://localhost:${port}/`)
			console.log(`Server has been started on port ${port}...`)
		})
	})
