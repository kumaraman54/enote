require('dotenv').config();
const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')

connectToMongo();

const app = express();
const port = 5000;
const corsOptions = {
  origin: ['https://enote-qawk.vercel.app','http://localhost:3000'], // Allow only requests from this origin
  methods: 'GET,POST,PUT,OPTIONS,DELETE,UPDATE,PATCH', // Allow only these methods
  // credentials: true, // Allow credentials (cookies, authorization headers)
  //allowedHeaders: ['Content-Type', 'Authorization'], // Allow only these headers
};

app.use(cors(corsOptions));

app.use(express.json()); // Middleware to parse JSON

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Enote backend listening at http://localhost:${port}`);
});


 
