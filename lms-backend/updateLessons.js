// updateLessonsAudio.js
const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017"; // your MongoDB URI
const dbName = "lms"; // your DB name

async function addAudioToLessons() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);
    const lessons = db.collection("lessons");

    // fetch all lessons sorted by _id (or any order you want)
    const allLessons = await lessons.find({}).sort({ _id: 1 }).toArray();

    for (let i = 0; i < allLessons.length; i++) {
      const lesson = allLessons[i];
      const audioFile = `/audios/SM ${i + 1}.mp4`; // sequential audio file

      await lessons.updateOne(
        { _id: lesson._id },
        { $set: { audio: audioFile } }
      );

      console.log(`Updated lesson: ${lesson.title} with audio: ${audioFile}`);
    }

    console.log("All lessons updated successfully!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

addAudioToLessons();
