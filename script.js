const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = {
	users: [
        {
	        name: 'testing',
	        email: 'test@gmail.com',
	        password: 'pass',
	        dob: new Date(2000-10-01),
	        city: 'Vancouver',
	        joined: new Date()
    	}	
	]
}


app.get('/', (req, res) => {
	res.json(db.users);
})

// app.post('/signin', (req, res) => {

// })

app.post('/register', (req, res) => {
	const {name, email, password, dob, city} = req.body;
	// const hash = bcrypt.hashSync(password);
	db.users.push({
		name: name,
		email: email,
		password: password,
		dob: dob,
		city: city,
		joined: new Date()
	})
	res.json(db.users[db.users.length -1]);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});