const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const providersRoutes = require('./routes/providers');
const channelsRoutes = require('./routes/channels');
const bouquetsRoutes = require('./routes/bouquets');

const MONGODB_URI =
	'mongodb+srv://aviral:dNT8VD7PBLQ5tF30@cluster0.yrqwv.mongodb.net/cable-prices?retryWrites=true&w=majority';

const app = express();

app.use(
	cors({
		origin: 'https://channel-selector-app.vercel.app',
	}),
);
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

app.use(providersRoutes);
app.use(channelsRoutes);
app.use(bouquetsRoutes);

mongoose
	.connect(MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => {
		let port = process.env.PORT;
		if (port == null || port === '') {
			port = 3000;
		}
		app.listen(port);
	})
	.catch(err => console.log(err));
