const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
	res.send('Backend is working');
})

app.post('/signin', (req, res) => {

})

app.post('/register', (req, res) => {
	const {name, email, password, dob, city} = req.body;
	// const hash = bcrypt.hashSync(password);
	res.send(req.body);
})

app.listen(process.env.PORT || 3000, () => {
	console.log(`Sucess!!! on port ${process.env.PORT}`);
});