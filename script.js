const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
	res.send('Backend is working');
})

// app.post('/signin', (req, res) => {

// })

app.post('/register', (req, res) => {
	const {name, email, password, dob, city} = req.body;
	// const hash = bcrypt.hashSync(password);
	res.send(req.body);
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});