const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors')
const port = 5000;
const app = express();


app.use(cors());

connectToMongo();
// const corsOptions = {
//   origin: ['https://enote-qawk.vercel.app','http://localhost:5000'], // Allow only requests from this origin
//   methods: 'GET,POST,PUT,OPTIONS,DELETE,UPDATE,PATCH', // Allow only these methods
//   // credentials: true, // Allow credentials (cookies, authorization headers)
//   //allowedHeaders: ['Content-Type', 'Authorization'], // Allow only these headers
// };


app.use(express.json()); // Middleware to parse JSON

// Available Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Enote backend listening at http://localhost:${port}`);
});


 
