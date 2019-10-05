const express = require('express')
const player = require('play-sound')(opts = {})
const app = express()
const port = 3000

app.get('/ring', (req, res) => {
	player.play('./sounds/laughhowl1.mp3', function(err){
  		if (err) throw err
	})
	res.send('Playing sound');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
