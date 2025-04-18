import mongoose from 'mongoose';
import dotenv from 'dotenv';
import db from '../config/connection.js';
import { Thought, User } from '../models/index.js';
import data from './data.json' with { type: "json" };

dotenv.config();

const seed = async () => {
  try {
    await db();

    // Clear existing records
    await User.deleteMany({});
    await Thought.deleteMany({});
    console.log("Cleared existing collections.");

    // Seed users and thoughts
    for (const entry of data) {
      const user = await User.create({
        username: entry.username,
        email: entry.email
      });
      await Thought.create({
        thoughtText: entry.thoughtText.slice(0, 280),
        username: user.username
      });
    }

    console.log("Database seeded with users and thoughts successfully! 🌱");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seed();
