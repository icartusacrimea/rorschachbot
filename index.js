'use strict';
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const blots = require('./blots');

const server = app.listen(80, () => {console.log('Express server listening on port %d in %s mode.', server.address().port, app.settings.env);});

app.post('/', (req, res) => {
	let text = req.body.text;
	//bot stuff

	let data = {
		response_type: 'in_channel', 
		text: 'a blot for thought',
		attachments:[ {
			image_url: 'https://s-media-cache-ak0.pinimg.com/originals/3f/98/eb/3f98ebd736fcc1cd1e011690d6a33ca9.jpg'
		} ]};

	res.json(data);

});