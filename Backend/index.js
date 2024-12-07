const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors')
const port = 5000;
const app = express();


app.use(cors());

connectToMongo();

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


 
