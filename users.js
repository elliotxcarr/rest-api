import express from 'express'
import { connectDb } from './mongodb.js';
const router = express.Router();


router.get('/', async (req, res) => {
  const client = await connectDb();
  const db = await client.db("walking_db");
  const users = await db.collection("users").find({}).toArray();
  res.send(users).status(200);
});

export default router