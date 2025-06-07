import {MongoClient} from "mongodb";
import type {ObjectId} from "bson";
import type {User} from "~/share/types";

type ObjectIdHeader = {
  _id?: ObjectId;
}

type UserDocument = Omit<User, '_id'> & ObjectIdHeader

export function getClient() {
  return new MongoClient(
    process.env.DB_CONNECTION_STRING || "mongodb://localhost:27100/",
  );
}

export function getDatabase() {
  return getClient().db("colabhub");
}

export function getUserCollection() {
  return getDatabase().collection<UserDocument>("users");
}

export function generateToken() {
  return Math.random().toString(36).substring(2, 15)
    + Math.random().toString(36).substring(2, 15)
    + Math.random().toString(36).substring(2, 15)
    + Math.random().toString(36).substring(2, 15);
}