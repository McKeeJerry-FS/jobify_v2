import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import { nanoid } from 'nanoid';

dotenv.config();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send('Hello React!');
});

app.use(express.json());

app.post('/',(req,res) => {
  console.log(req);
  res.json({message: 'Data received successfully', data: req.body});
});

let jobs = [
  { id: nanoid(), company: 'apple', position: 'front-end' },
  { id: nanoid(), company: 'google', position: 'back-end' },
  { id: nanoid(), company: 'microsoft', position: 'full-stack' },
]

app.get('/api/jobs', (req, res) => {
  res.status(200).json({ jobs });
});

try {
  const response = await fetch(
    'https://www.course-api.com/react-useReducer-cart-project'
  );
  const cartData = await response.json();
  console.log(cartData);
} catch (error) {
  console.log(error);
}

const port = process.env.PORT || 5100;  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});