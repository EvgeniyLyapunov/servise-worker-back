const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const { faker } = require('@faker-js/faker');

const app = express();

app.use(morgan('dev'));

// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

app.use(cors());

app.use(
	bodyParser.json({
		type(req) {
			return true;
		},
	})
);

app.use((req, res, next) => {
	res.setHeader('Content-Type', 'application/json');
	next();
});

app.get('/:count', (request, response) => {
	const count = +request.params.count;
	const news = getNewsData(count);
	const delay = Math.floor(Math.random() * 5) * 1000;
	try {
		setTimeout(() => {
			response.send(JSON.stringify(news)).end();
		}, delay);
		// response.json(unreadMessages).end();
	} catch (error) {
		response.status(500).send(JSON.stringify({ error: error.message }));
	}
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Application listening on port ${port}!`);
});

function getNewsData(count) {
	const news = [];
	for (let i = 0; i < count; i++) {
		const newsItem = {
			id: faker.string.uuid(),
			date: Date.now(),
			text: faker.lorem.paragraph({ min: 1, max: 4 }),
			image: faker.image.avatarGitHub(),
		};

		news.push(newsItem);
	}

	return news;
}
