import express from 'express';
import  pool from './middlewares/pool.js';

const app = express();
const port = process.env.PORT || 3000;


app.get('/', async (req, res) => {
  try{
    const result = await pool.query('SELECT NOW()')
    res.send(result.rows[0]);
    console.log('Conexion exitosa')
  } catch(error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log('Server running on port 3000');
});