const express = require('express');

const app = express();

var blockApi = require('./api/block');

app.use('/block', blockApi);

app.use((req, res) => {
	res.status(404).send('Page introuvable !');
});

app.listen(3000, function () {
	console.log("Listening on the port 3000...");
});
