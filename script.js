const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || '34.94.244.15',
  database: process.env.DB_NAME || 'postgres',
  password: process.env.DB_PASSWORD || 'root',
});

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

app.use('/', function(req,res,next){
  console.log(req.method, 'request:', req.url, JSON.stringify(req.body));
  next();
});

app.get('/', (req, res) => {
	res.json(db.users);
})

// app.post('/signin', (req, res) => {

// })

app.post('/register', (req, res) => {
	const {fullname, email, password, dob, city} = req.body;
  const joined = new Date();
  const query = {
    text: 'INSERT INTO users(name, email, password, dob, city, joined) VALUES ($1, $2, $3, $4, $5, $6)',
    values: [fullname, email, password, dob, city, joined],
  };
  pool.query(query, (error, results) => {
    if (error) {
      console.log(error.stack);
    } else {
      res.json(results.rows[0]);
    }
  })
	// const hash = bcrypt.hashSync(password);
	// db.users.push({
	// 	name: name,
	// 	email: email,
	// 	password: password,
	// 	dob: dob,
	// 	city: city,
	// 	joined: new Date()
	// })
	// res.json(db.users[db.users.length -1]);
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});