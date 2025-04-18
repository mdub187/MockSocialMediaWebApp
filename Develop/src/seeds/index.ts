import db from '../config/connection.js';
import { Thought, User } from '../models/index.js';
import cleanDB from './cleanDB.js';
import '../seeds/cleanDB.js';
// import { getRandomName } from './../seeds/cleanDB.js';

try {
  await db();
  await cleanDB();

  // Create empty array to hold the users
  const users = [];

    // Loop 20 times -- add users to the users array
    for (let i = 0; i < 20; i++) {
        // Get some random assignment objects using a helper function that we imported from ./data
        // const thoughts = getRandomAssignments(20);

        const fullName = getRandomName();
        const first = fullName.split(' ')[0];
        const last = fullName.split(' ')[1];
        const email = `${first}.${last}@email.com`;

        // users.push({
        //     username: first,
        //     email: email,
        //     thoughts: [],
        //     friends: [],
        // });
    }

    // Add users to the collection and await the results
    const userData = await User.User.find(users);

    // Add courses to the collection and await the results
    await Thought.create({
        thoughtText: 'UCLA',
        username: userData[0].username,
    });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
} catch (error) {
  console.error('Error seeding database:', error);
  process.exit(1);
}

