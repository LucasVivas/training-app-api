import express from 'express';
import mongoose from 'mongoose';

const MongoConnectionString = 'mongodb+srv://LucasTest:oV9ijbx8JukWg3DV@cluster0.hyysm.mongodb.net/tutoOCRDatabase?retryWrites=true&w=majority';
	
async function startServer() {
	// await mongoose.connect(MongoConnectionString,
	// 	{	useNewUrlParser: true,
	// 		useCreateIndex: true,
	// 		useUnifiedTopology: true,	})
	// 	.then(() => console.log('Connexion à MongoDB réussie !'))
	// 	.catch(() => console.log('Connexion à MongoDB échouée !'));


	const app = express();

	var blockApi = require('./api/training');

	app.use('/training', blockApi);

	app.use((req, res) => {
		res.status(404).send('Page introuvable !');
	});

	app.listen(3000, function () {
		console.log("Listening on the port 3000...");
	});
}

startServer();