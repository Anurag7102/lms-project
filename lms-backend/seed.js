import bcrypt from "bcryptjs";
import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017/lms"; // your DB
const client = new MongoClient(uri);

async function seed() {
  await client.connect();
  const db = client.db("lms");
  const usersCollection = db.collection("users");

  // Delete old Super Admin if exists
  await usersCollection.deleteOne({ email: "superadmin@123" });

  // Hash password
  const hashedPassword = await bcrypt.hash("password", 10);

  // Insert new Super Admin
  await usersCollection.insertOne({
    name: "admin",
    email: "superadmin@123",
    password: hashedPassword,
    role: "admin",
  });

  console.log("Super Admin created!");
  await client.close();
}

seed();
