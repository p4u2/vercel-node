require('dotenv').config()
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()


const PORT = 1234 // local testing port
const {VERCEL} = process.env

if(!VERCEL){ // vercel automaticly serve the public directory as static files,
			// but for local testing we have to add this route in express
	var public = path.join(__dirname, '../public'); app.use('/', express.static(public))
}

// tell express to parse json and urlencoded request body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// disable browser caching
app.set('etag',false)

//=========================================================================================

// example get handler - html response
app.get('/hello', async (req, res) => {
	console.log('=> hello', req.query)
	res.send(`<h1>Hello ${req.query.name||'World'}!</h1>`)
})

//=========================================================================================

// example get handler - json response
app.get('/get_data', async (req, res) => {
	console.log('=> get_data', req.query)
	let {user} = req.query
	res.json({ok:true, num:23, user})
})

//=========================================================================================

// example post handler - json response
app.post('/post_data', async (req, res) => {
	console.log('=> post_data', req.headers['content-type'], req.body)
	let {user} = req.body
	res.json({ok:true, num:23, user})
})

//=========================================================================================

// default handler
app.use((req,res) => res.status(404).send('404 - not found :('))


 // start app for development ( >>> node api )
app.listen(PORT, ()=>console.log('>>> start server, listen on http://localhost:'+PORT))

module.exports = app
