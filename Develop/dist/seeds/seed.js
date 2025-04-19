import mongoose from 'mongoose';
import dotenv from 'dotenv';
import db from '../config/connection.js';
import { Thought, User } from '../models/index.js';
import data from './data.json' with { type: "json" };

dotenv.config();

const seed = async () => {
  try {
    await db();

    // 🔥 Clear old data
    await User.deleteMany({});
    await Thought.deleteMany({});
    console.log("✅ Cleared existing collections.");

    // 🌱 Create users and thoughts
    for (const entry of data) {
      const { username, email, thoughtText } = entry;

      // 1. Create the user
      const user = await User.create({ username, email });

      // 2. Create the thought, assign user._id if your schema supports it
      const thought = await Thought.create({
        thoughtText: thoughtText.slice(0, 280),
        username: user.username,
        userId: user._id  
      });

      // 3. Push thought to user's thoughts array (if needed)
      user.thoughts.push(thought._id);
      await user.save();
    }

    console.log("🎉 Database seeded with users and thoughts successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

export default seed();