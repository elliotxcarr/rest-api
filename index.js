import express from 'express'
import { connectDb } from './mongodb.js';
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(
  PORT,
  () => console.log(`its alive on http://localhost:${PORT}`)
)

app.get('/api/users', async (req, res) => {
  const client = await connectDb();
  const db = await client.db("walking_db");
  const users = await db.collection("users").find({}).toArray();
  res.send(users).status(200);
});

app.get('/api/walks', async (req, res) => {
  const client = await connectDb();
  const db = await client.db("walking_db");
  const users = await db.collection("hillwalks").find({}).toArray();
  res.send(users).status(200);
});