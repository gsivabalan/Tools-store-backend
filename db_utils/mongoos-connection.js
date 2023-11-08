import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

const username = process.env.DB_USERNAME || '';
const password = process.env.DB_PASSWORD || '';
const clusterName = process.env.DB_CLUSTER || '';
const dbName = process.env.DB_NAME || '';

const cloudMongoUrl = `mongodb+srv://siva90balan:siva1234@cluster0.hxxvppo.mongodb.net/?retryWrites=true&w=majority`;

const connectToDb = async () => {
  try {
    await mongoose.connect(cloudMongoUrl, {
      useNewUrlParser: true,
    });
    console.log("DB Connected Successfully");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

export default connectToDb;