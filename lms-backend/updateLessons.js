// updateLessonsFilenames.js
const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017"; // your MongoDB URI
const dbName = "lms"; // your database name

async function updateLessonFilenames() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const lessonsCollection = db.collection("lessons");

    // Fetch all lessons
    const lessons = await lessonsCollection.find({}).toArray();

    for (let lesson of lessons) {
      const updates = {};

      // If video exists, strip the folder path, keep only filename
      if (lesson.video) {
        updates.video = lesson.video.split("/").pop();
      }

      // If audio exists, strip the folder path, keep only filename
      if (lesson.audio) {
        updates.audio = lesson.audio.split("/").pop();
      }

      // Update the lesson
      if (Object.keys(updates).length > 0) {
        await lessonsCollection.updateOne(
          { _id: lesson._id },
          { $set: updates }
        );
        console.log(
          `Updated lesson "${lesson.title}" -> video: ${updates.video}, audio: ${updates.audio}`
        );
      }
    }

    console.log("All lessons updated successfully!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

updateLessonFilenames();
