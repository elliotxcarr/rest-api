import express from 'express'
import { connectDb } from './mongodb.js';
import users from './users.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use('/users', users);

app.listen(
  PORT,
  () => console.log(`its alive on http://localhost:${PORT}`)
)

app.get('/api/walks', async (req, res) => {
  const client = await connectDb();
  const db = await client.db("walking_db");
  const users = await db.collection("hillwalks").find({}).toArray();
  res.send(users).status(200);
});