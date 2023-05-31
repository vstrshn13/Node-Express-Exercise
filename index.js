const  express = require('express');
const  axios = require('axios');

const  app = express();
const achievement = {"achievement":"BackEnd What?"};
const greet ={"sayGreeting":"Hello From StackTrek"}
app.get('/', async (req, res) => {
	res.send('Hello there!');
});

app.get('/show',(req, res) => {
	res.send([{"achievement":"BackEnd What?"},{"sayGreeting":"Hello From StackTrek"}]);
});

app.get('/achievement', async (req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(achievement.achievement);
});

app.get('/greet', async (req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(greet.sayGreeting);
});

app.listen(3001, () => {
	console.log('Server listening on port 3001');
});